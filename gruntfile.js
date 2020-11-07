const webpackConfig = require(`./webpack.config.js`);

module.exports = (grunt => {
    grunt.initConfig({
        pkg: grunt.file.readJSON(`package.json`),
        concat: {
            dist_scripts: {
                src: [  
                    `src/client/assets/js/core/client/config.js`,
                    `src/client/assets/js/rangeInput.js`,

                    `src/client/assets/js/canvas.map.js`,

                    `src/client/assets/js/libs/ua.js`,
                    `src/client/assets/js/libs/keypress.min.js`,
                    `src/client/assets/js/libs/OBJLoader.js`,
                    `src/client/assets/js/libs/TGALoader.js`,
                    `src/client/assets/js/libs/MTLLoader.js`,
                    `src/client/assets/js/libs/socket.io.js`,

                    `src/client/assets/js/core/environment.js`,
                    `src/client/assets/js/core/window.js`,
                    `src/client/assets/js/core/geometry.js`,
                    `src/client/assets/js/core/loader.js`,
                    `src/client/assets/js/core/keyboard.js`,
                    `src/client/assets/js/core/controls.js`,

                    `src/client/assets/js/core/core.js`,
                    `src/client/assets/js/core/utils.js`,
                    `src/client/assets/js/core/entity.js`,
                    `src/client/assets/js/core/goods_types.js`,
                    `src/client/assets/js/core/client/parseSnap.js`,
                    `src/client/assets/js/core/boat_types.js`,
                    `src/client/assets/js/core/boat.js`,
                    `src/client/assets/js/core/item.js`,
                    `src/client/assets/js/core/player.js`,
                    `src/client/assets/js/core/impact.js`,
                    `src/client/assets/js/core/pickup.js`,
                    `src/client/assets/js/core/landmark.js`,
                    `src/client/assets/js/core/projectile.js`,

                    `src/client/assets/js/core/client/entity.js`,
                    `src/client/assets/js/core/client/boat.js`,
                    `src/client/assets/js/core/client/player.js`,

                    `src/client/assets/js/ui/suggestion.js`,
                    `src/client/assets/js/ui/krewlist.js`,
                    `src/client/assets/js/ui/goods.js`,
                    `src/client/assets/js/ui/experience.js`,

                    `src/client/assets/js/ui.js`,
                    `src/client/assets/js/main.js`,
                    `src/client/assets/js/particles.js`,
                    `src/client/assets/js/connection.js`,
                ],
                dest: `dist_anonym/dist.js`
            },
        },
        clean: {
            dist: [`dist_anonym/`, `dist/`]
        },
        copy: {
            dist: {
                files: [
                    { expand: true, nonull: true, flatten: true, src: [`src/client/*`, `!src/client/*.html`], dest: `dist/`, filter: `isFile` },
                    { expand: true, nonull: true, flatten: true, src: [`src/client/assets/css/*`], dest: `dist/assets/css/`, filter: `isFile` },
                    { expand: true, nonull: true, flatten: true, src: [`src/client/assets/fonts/*`], dest: `dist/assets/fonts/`, filter: `isFile` },
                    { expand: true, nonull: true, flatten: true, src: [`src/client/assets/img/*`], dest: `dist/assets/img/`, filter: `isFile` },
                    { expand: true, nonull: true, flatten: true, src: [`src/client/assets/js/libs/*`], dest: `dist/assets/js/`, filter: `isFile` },
                    { expand: true, nonull: true, flatten: true, src: [`src/client/assets/models/*`], dest: `dist/assets/models/`, filter: `isFile` },
                    { expand: true, nonull: true, flatten: true, src: [`src/client/assets/models/dogs/*`], dest: `dist/assets/models/dogs/`, filter: `isFile` },
                    { expand: true, nonull: true, flatten: true, src: [`src/client/assets/models/cannon/*`], dest: `dist/assets/models/cannon/`, filter: `isFile` },
                    { expand: true, nonull: true, flatten: true, src: [`src/client/assets/audio/*`], dest: `dist/assets/audio/`, filter: `isFile` },
                    { expand: true, nonull: true, flatten: true, src: [`src/client/assets/models/ships/*`], dest: `dist/assets/models/ships/`, filter: `isFile` },
                    { expand: true, nonull: true, flatten: true, src: [`src/client/assets/error-pages/*`], dest: `dist/assets/error-pages/`, filter: `isFile` },
                    { expand: true, nonull: true, flatten: true, src: [`src/client/assets/models/sea_animals/*`], dest: `dist/assets/models/sea_animals/`, filter: `isFile` }
                ]
            }
        },
        webpack: {
            options: {
                stats: !process.env.NODE_ENV || process.env.NODE_ENV == `dev`
            },
            prod: webpackConfig,
            dev: Object.assign({ watch: true }, webpackConfig)
        }
    });

    grunt.registerTask(`build-dist`, [
        `clean:dist`,
        `copy:dist`,
        `concat:dist_scripts`,
    ]);

    grunt.loadNpmTasks(`grunt-contrib-concat`);
    grunt.loadNpmTasks(`grunt-contrib-clean`);
    grunt.loadNpmTasks(`grunt-contrib-copy`);
    grunt.loadNpmTasks(`grunt-webpack`);
});