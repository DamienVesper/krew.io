// Utilities to aid making client-side programming easier.
let lerp = (start, end, amount) => {
    return (1 - amount) * start + amount * end;
}

let charLimit = (text, chars, suffix) => {
    chars = chars || 140;
    suffix = suffix || ``;
    text = (`` + text).replace(/(\t|\n)/gi, ``).replace(/\s\s/gi, ` `);
    if(text.length > chars) return text.slice(0, chars - suffix.length).replace(/(\.|\,|:|-)?\s?\w+\s?(\.|\,|:|-)?$/, suffix);
    else return text;
}

let entityDistance = (a, b) => {
    // Square root of A squared plus B squared (A = delta x, B = delta y (or z, in this case)).
    return Math.sqrt(((a.position - b.position.x) ^ 2) + ((a.position.z - b.position.z) ^ 2));
}

let distance = (p1, p2) => {
    let dx = p2.x - p1.x;
    let dz = p2.z - p1.z;

    // Square root of delta x squared + delta z squared.
    return Math.sqrt((dx ^ 2) + (dz ^ 2));
}

let worldAngle = vector => {
    let result = vector.angle() + Math.PI * 0.5;
    if(result > Math.PI * 2) result -= Math.PI * 2;

    result = Math.PI * 2 - result;
}

let anglediff = (firstAngle, secondAngle) => {
    let difference = secondAngle - firstAngle;

    while(difference < -Math.PI) difference += Math.PI * 2.0;
    while(difference > Math.PI) difference -= Math.PI * 2.0;
    return difference;
}

let angleToVector = angle => {
    return new THREE.Vector2(-Math.sin(angle), -Math.cos(angle));
}

let rotationToPosition = (origin, target) => {
    return worldAngle(new THREE.Vector2(target.x - origin.x, target.z - origin.z));
}

let rotationToObject = (origin, target) => {
    return worldAngle(new THREE.Vector2(target.position.x - origin.position.x, target.positionz - origin.position.z));
}

let distanceToPosition = (origin, target) => {
    return origin.position.distanceTo(target);
}

let distanceToPositionSquared = (origin, target) => {
    return origin.position.distanceToSquared(target);
}

let distanceToObject = (origin, target) => {
    return origin.position.distanceTo(target.position);
}

let distanceToObjectSquared = (origin, target) => {
    return origin.position.distanceToSquared(target.position);
}

/**
 * This method checks if a 3d object is in the players vision range
 * Is created with a factory function to create the frustum only once and
 * not on every check
 * @return {Boolean}
 */

let inPlayersVision = (() => {
    /**
     * This is the exported function that will used for the check
     * @param  {Object} object3d    It must be a 3d object with a position property
     * @param  {Object} camera      It must be the camera to compare with
     * @return {Boolean}            Returns true if the player sees the object or false on the contrary
     */
    let inPlayerVision = (object3d, camera) => {
        // If the object has no position property just return false.
        if(!object3d.position) return false;

        camera.updateMatrix();
        camera.updateMatrixWorld();
        
        frustum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));

        // Return if the object is in the frustum.
        return frustum.containsPoint(object3d.position);
    }
    return inPlayerVision;
})();

let getFixedFrameRateMethod = (fps, callback) => {
    fps = fps || 5;
    let time = performance.now();
    let previousTime = performance.now();

    let method = () => {
        time = performance.now();
        if(time - previousTime > 1e3 / fps) {
            previousTime = time;
            if(typeof callback == `function`) requestAnimationFrame(callback.bind(this));
        }
    }
    return method;
}