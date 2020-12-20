var boatTypes = {
    0: {
        id: 0,
        name: 'Wood Plank',
        hp: 25,
        turnspeed: 1.0,
        price: 501,
        maxKrewCapacity: 1,
        cargoSize: 50,
        baseheight: 1.4,
        width: 4,
        depth: 5.5,
        arcFront: 0,
        inertia: 0.1,
        radius: 5,
        speed: 6.5,
        labelHeight: 7,
        regeneration: 1,
        body: 'raft',
        sail: undefined,
        scale: [1.2, 1, 1.5],
        offset: [0, -1, 0],
        rotation: [0, 0, 0],
    },
    1: {
        id: 1,
        image: '<img src="./assets/img/raft.png" style="height: 30px">',
        name: 'Raft 1',
        hp: 75,
        turnspeed: 1.2,
        price: 500,
        maxKrewCapacity: 1,
        cargoSize: 200,
        baseheight: 1.4,
        width: 4,
        depth: 5.5,
        arcFront: 0.3,
        inertia: 0.1,
        radius: 5,
        speed: 6,
        labelHeight: 10,
        regeneration: 1,
        body: 'raft',
        sail: 'raft',
        scale: [1.7, 1.7, 1.7],
        offset: [0, -1.0, 0],
        rotation: [0, 0, 0],
    },
    2: {
        id: 2,
        image: '<img src="./assets/img/raft.png" style="height: 35px">',
        name: 'Raft 2',
        hp: 150,
        turnspeed: 1,
        price: 1300,
        maxKrewCapacity: 2,
        cargoSize: 300,
        baseheight: 1.4,
        width: 4.5,
        depth: 6,
        arcFront: 0.3,
        inertia: 0.1,
        radius: 5,
        speed: 5.9,
        labelHeight: 10,
        regeneration: 1,
        body: 'raft',
        sail: 'raft',
        scale: [1.7, 1.7, 1.7],
        offset: [0, -1.0, 0],
        rotation: [0, 0, 0],
    },
    3: {
        id: 3,
        image: '<img src="./assets/img/raft.png" style="height: 40px">',
        name: 'Raft 3',
        hp: 200,
        turnspeed: 0.9,
        price: 2400,
        maxKrewCapacity: 3,
        cargoSize: 400,
        baseheight: 1.4,
        width: 5,
        depth: 6.5,
        arcFront: 0.3,
        inertia: 0.1,
        radius: 5,
        speed: 5.8,
        labelHeight: 10,
        regeneration: 1,
        body: 'raft',
        sail: 'raft',
        scale: [1.7, 1.7, 1.7],
        offset: [0, -1.0, 0],
        rotation: [0, 0, 0],
    },
    4: {
        id: 4,
        image: '<img src="./assets/img/trader.png" style="height: 30px">',
        name: 'Trader 1',
        hp: 400,
        turnspeed: 0.5,
        price: 4350,
        maxKrewCapacity: 4,
        cargoSize: 2000,
        baseheight: 3,
        width: 7,
        depth: 12.5,
        arcFront: 0.3,
        inertia: 0.5,
        radius: 10,
        speed: 5.4,
        labelHeight: 12,
        regeneration: 1,
        body: 'ship1',
        sail: 'ship1',
        scale: [5.5, 5.5, 5.5],
        offset: [0, -4.5, 1],
        rotation: [0, 0, 0],
    },
    5: {
        id: 5,
        image: '<img src="./assets/img/boat.png" style="height: 30px">',
        name: 'Boat 1',
        hp: 450,
        turnspeed: 0.7,
        price: 6900,
        maxKrewCapacity: 5,
        cargoSize: 500,
        baseheight: 3,
        width: 7,
        depth: 12.5,
        arcFront: 0.3,
        inertia: 0.5,
        radius: 10,
        speed: 5.8,
        labelHeight: 12,
        regeneration: 1,
        body: 'ship1',
        sail: 'ship1',
        scale: [5, 5, 5],
        offset: [0, -4.5, 1],
        rotation: [0, 0, 0],
    },
    6: {
        id: 6,
        image: '<img src="./assets/img/boat.png" style="height: 35px">',
        name: 'Boat 2',
        hp: 600,
        turnspeed: 0.7,
        price: 11000,
        maxKrewCapacity: 6,
        cargoSize: 600,
        baseheight: 3,
        width: 7,
        depth: 12.5,
        arcFront: 0.3,
        inertia: 0.5,
        radius: 10,
        speed: 5.9,
        labelHeight: 12,
        regeneration: 1,
        body: 'ship1',
        sail: 'ship1',
        scale: [5, 5, 5],
        offset: [0, -4.5, 1],
        rotation: [0, 0, 0],
    },
    7: {
        id: 7,
        image: '<img src="./assets/img/boat.png" style="height: 40px">',
        name: 'Boat 3',
        hp: 750,
        turnspeed: 0.7,
        price: 16000,
        maxKrewCapacity: 7,
        cargoSize: 700,
        baseheight: 3,
        width: 7,
        depth: 12.5,
        arcFront: 0.3,
        inertia: 0.5,
        radius: 10,
        speed: 6.0,
        labelHeight: 12,
        regeneration: 1,
        body: 'ship1',
        sail: 'ship1',
        scale: [5, 5, 5],
        offset: [0, -4.5, 1],
        rotation: [0, 0, 0],
    },
    8: {
        id: 8,
        image: '<img src="./assets/img/destroyer.png" style="height: 35px">',
        name: 'Destroyer 1',
        hp: 1200,
        turnspeed: 0.7,
        price: 50000,
        maxKrewCapacity: 12,
        cargoSize: 1000,
        baseheight: 5,
        width: 11.5,
        depth: 26,
        arcFront: 0.1,
        inertia: 1.0,
        radius: 15,
        speed: 5.9,
        labelHeight: 21,
        regeneration: 1,
        body: 'ship2',
        sail: 'ship2',
        scale: [6, 6, 6],
        offset: [0, -8, 0],
        rotation: [0, 0, 0],
    },
    9: {
        id: 9,
        image: '<img src="./assets/img/destroyer.png" style="height: 40px">',
        name: 'Destroyer 2',
        hp: 1800,
        turnspeed: 0.7,
        price: 80000,
        maxKrewCapacity: 14,
        cargoSize: 1300,
        baseheight: 5,
        width: 11.5,
        depth: 26,
        arcFront: 0.1,
        inertia: 1.0,
        radius: 15,
        speed: 5.8,
        labelHeight: 21,
        regeneration: 1,
        body: 'ship2',
        sail: 'ship2',
        scale: [6, 6, 6],
        offset: [0, -8, 0],
        rotation: [0, 0, 0],
    },
    10: {
        id: 10,
        image: '<img src="./assets/img/destroyer.png" style="height: 45px">',
        name: 'Destroyer 3',
        hp: 2600,
        turnspeed: 0.7,
        price: 130000,
        maxKrewCapacity: 16,
        cargoSize: 1600,
        baseheight: 5,
        width: 11.5,
        depth: 26,
        arcFront: 0.1,
        inertia: 1.0,
        radius: 15,
        speed: 5.7,
        labelHeight: 21,
        regeneration: 1,
        body: 'ship2',
        sail: 'ship2',
        scale: [6, 6, 6],
        offset: [0, -8, 0],
        rotation: [0, 0, 0],
    },

    11: {
        id: 11,
        image: '<img src="./assets/img/baby_fancy.png" style="height: 35px">',
        name: 'Baby Fancy',
        hp: 300,
        turnspeed: 1,
        price: 8000,
        maxKrewCapacity: 3,
        cargoSize: 300,
        baseheight: 1.4,
        width: 4,
        depth: 6.5,
        arcFront: 0.3,
        inertia: 0.1,
        radius: 8,
        speed: 5.9,
        labelHeight: 10,
        regeneration: 0.5,
        body: 'sloop',
        sail: 'sloop',
        mast: 'sloop',
        scale: [0.15, 0.18, 0.12],
        offset: [0, 5.5, 0],
        rotation: [0, 0, 0],
        availableAt: ['Spain', 'Brazil'],
    },
    12: {
        id: 12,
        image: '<img src="./assets/img/royal_fortune.png" style="height: 35px">',
        name: 'Royal Fortune',
        hp: 1000,
        turnspeed: 0.5,
        price: 70000,
        maxKrewCapacity: 15,
        cargoSize: 1200,
        baseheight: 4,
        width: 10,
        depth: 26,
        arcFront: 0.3,
        inertia: 0.5,
        radius: 15,
        speed: 6,
        labelHeight: 12,
        regeneration: 1,
        body: 'schooner',
        sail: 'schooner',
        mast: 'schooner',
        scale: [0.15, 0.15, 0.15],
        offset: [2, 11.6, 3],
        rotation: [0, Math.PI / 2, 0],
        availableAt: ['Labrador', 'Spain'],
    },
    13: {
        id: 13,
        image: '<img src="./assets/img/calm_spirit.png" style="height: 35px">',
        name: 'Calm Spirit',
        hp: 1800,
        turnspeed: 0.7,
        price: 120000,
        maxKrewCapacity: 18,
        cargoSize: 2000,
        baseheight: 4,
        width: 10,
        depth: 30,
        arcFront: 0.3,
        inertia: 0.5,
        radius: 16,
        speed: 5.9,
        labelHeight: 12,
        regeneration: 1,
        body: 'vessel',
        sail: 'vessel',
        mast: 'vessel',
        scale: [0.1, 0.1, 0.1],
        offset: [1, 10, 5],
        rotation: [0, Math.PI / 2, 0],
        availableAt: ['Spain', 'Guinea'],
    },
    14: {
        id: 14,
        image: '<img src="./assets/img/QBJ.png" style="height: 45px">',
        name: "Queen Barb's Justice",
        hp: 3000,
        turnspeed: 0.7,
        price: 200000,
        maxKrewCapacity: 20,
        cargoSize: 3000,
        baseheight: 5,
        width: 8,
        depth: 38,
        arcFront: 0.1,
        inertia: 1.0,
        radius: 20,
        speed: 5.9,
        labelHeight: 21,
        regeneration: 1,
        body: 'bigship',
        sail: 'bigship',
        mast: 'bigship',
        scale: [0.1, 0.1, 0.1],
        offset: [1, 13.4, 1],
        rotation: [0, Math.PI / 2, 0],
        availableAt: ['Spain'],
    },

    15: {
        id: 15,
        image: '<img src="./assets/img/trader.png" style="height: 35px">',
        name: 'Trader 2',
        hp: 500,
        turnspeed: 0.5,
        price: 11000,
        maxKrewCapacity: 6,
        cargoSize: 4000,
        baseheight: 3,
        width: 7,
        depth: 12.5,
        arcFront: 0.3,
        inertia: 0.5,
        radius: 10,
        speed: 5.5,
        labelHeight: 12,
        regeneration: 1,
        body: 'ship1',
        sail: 'ship1',
        scale: [5.5, 5.5, 5.5],
        offset: [0, -4.5, 1],
        rotation: [0, 0, 0],
        availableAt: ['Jamaica'],
    },
    16: {
        id: 16,
        image: '<img src="./assets/img/trader.png" style="height: 40px">',
        name: 'Trader 3',
        hp: 750,
        turnspeed: 0.5,
        price: 30000,
        maxKrewCapacity: 6,
        cargoSize: 6000,
        baseheight: 3,
        width: 7,
        depth: 12.5,
        arcFront: 0.3,
        inertia: 0.5,
        radius: 10,
        speed: 5.5,
        labelHeight: 12,
        regeneration: 1,
        body: 'ship1',
        sail: 'ship1',
        scale: [5.5, 5.5, 5.5],
        offset: [0, -4.5, 1],
        rotation: [0, 0, 0],
        availableAt: ['Jamaica'],
    },
    17: {
        id: 17,
        image: '<img src="./assets/img/baby_fancy.png" style="height: 40px">',
        name: 'Baby Fancy 2',
        hp: 500,
        turnspeed: 1,
        price: 40000,
        maxKrewCapacity: 3,
        cargoSize: 400,
        baseheight: 1.4,
        width: 4.5,
        depth: 7,
        arcFront: 0.3,
        inertia: 0.1,
        radius: 8,
        speed: 5.8,
        labelHeight: 10,
        regeneration: 0.5,
        body: 'sloop',
        sail: 'sloop',
        mast: 'sloop',
        scale: [0.15, 0.18, 0.12],
        offset: [0, 5.5, 0],
        rotation: [0, 0, 0],
        availableAt: ['Jamaica'],
    },
    18: {
        id: 18,
        image: '<img src="./assets/img/royal_fortune.png" style="height: 40px">',
        name: 'Royal Fortune 2',
        hp: 1300,
        turnspeed: 0.6,
        price: 110000,
        maxKrewCapacity: 18,
        cargoSize: 1400,
        baseheight: 4,
        width: 10,
        depth: 26,
        arcFront: 0.3,
        inertia: 0.5,
        radius: 15,
        speed: 5.9,
        labelHeight: 12,
        regeneration: 1,
        body: 'schooner',
        sail: 'schooner',
        mast: 'schooner',
        scale: [0.15, 0.15, 0.15],
        offset: [2, 11.6, 3],
        rotation: [0, Math.PI / 2, 0],
        availableAt: ['Jamaica'],
    },
    19: {
        id: 19,
        image: '<img src="./assets/img/calm_spirit.png" style="height: 45px">',
        name: 'Calm Spirit 2',
        hp: 2200,
        turnspeed: 0.7,
        price: 170000,
        maxKrewCapacity: 20,
        cargoSize: 2600,
        baseheight: 4,
        width: 10,
        depth: 30,
        arcFront: 0.3,
        inertia: 0.5,
        radius: 16,
        speed: 5.8,
        labelHeight: 12,
        regeneration: 1,
        body: 'vessel',
        sail: 'vessel',
        mast: 'vessel',
        scale: [0.1, 0.1, 0.1],
        offset: [1, 10, 5],
        rotation: [0, Math.PI / 2, 0],
        availableAt: ['Jamaica'],
    },
    20: {
        id: 20,
        image: '<img src="./assets/img/QBJ.png" style="height: 50px">',
        name: "Queen Barb's Justice 2",
        hp: 4000,
        turnspeed: 0.7,
        price: 350000,
        maxKrewCapacity: 25,
        cargoSize: 4000,
        baseheight: 5,
        width: 8,
        depth: 38,
        arcFront: 0.1,
        inertia: 1.0,
        radius: 20,
        speed: 5.8,
        labelHeight: 21,
        regeneration: 1,
        body: 'bigship',
        sail: 'bigship',
        mast: 'bigship',
        scale: [0.1, 0.1, 0.1],
        offset: [1, 13.4, 1],
        rotation: [0, Math.PI / 2, 0],
        availableAt: ['Jamaica'],
    },
};