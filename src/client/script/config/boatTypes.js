let boatTypes = {
    0: {
        id: 0,
        name: `Wood Plank`,
        hp: 75,
        turnspeed: 1.2,
        price: 500,
        maxKrewCapacity: 1,
        cargoSize: 200,
        baseheight: 1.4,
        width: 4,
        depth: 5.5,
        arcFront: 0,
        arcBack: 0,
        inertia: 0.1,
        radius: 5,
        speed: 6.5,
        labelHeight: 10,
        regeneration: 1,
        body: `raft`,
        sail: undefined,
        scale: [1.2, 1, 1.5],
        offset: [0, -1, 0],
        rotation: [0, 0, 0]
    },
    1: {
        id: 1,
        image: `<img src="./assets/img/raft.png" style="height: 30px">`,
        name: `Raft 1`,
        hp: 75,
        turnspeed: 1.2,
        price: 500,
        maxKrewCapacity: 1,
        cargoSize: 200,
        baseheight: 1.4,
        width: 4,
        depth: 5.5,
        arcFront: 0.0,
        arcBack: 0,
        inertia: 0.1,
        radius: 5,
        speed: 6.5,
        labelHeight: 10,
        regeneration: 1,
        body: `raft`,
        sail: `raft`,
        scale: [1.7, 1.7, 1.7],
        offset: [0, -1.0, 0],
        rotation: [0, 0, 0]
    },
    2: {
        id: 2,
        image: `<img src="./assets/img/raft.png" style="height: 35px">`,
        name: `Raft 2`,
        hp: 150,
        turnspeed: 1,
        price: 1300,
        maxKrewCapacity: 2,
        cargoSize: 300,
        baseheight: 1.4,
        width: 4.5,
        depth: 6,
        arcFront: 0.3,
        arcBack: 0,
        inertia: 0.1,
        radius: 5,
        speed: 5.9,
        labelHeight: 10,
        regeneration: 1,
        body: `raft`,
        sail: `raft`,
        scale: [1.7, 1.7, 1.7],
        offset: [0, -1.0, 0],
        rotation: [0, 0, 0]
    },
    3: {
        id: 3,
        image: `<img src="./assets/img/raft.png" style="height: 40px">`,
        name: `Raft 3`,
        hp: 200,
        turnspeed: 0.9,
        price: 2400,
        maxKrewCapacity: 3,
        cargoSize: 400,
        baseheight: 1.4,
        width: 5,
        depth: 6.5,
        arcFront: 0.3,
        arcBack: 0,
        inertia: 0.1,
        radius: 5,
        speed: 5.8,
        labelHeight: 10,
        regeneration: 1,
        body: `raft`,
        sail: `raft`,
        scale: [1.7, 1.7, 1.7],
        offset: [0, -1.0, 0],
        rotation: [0, 0, 0]
    },
    4: {
        id: 4,
        image: `<img src="./assets/img/trader.png" style="height: 30px">`,
        name: `Trader 1`,
        hp: 400,
        turnspeed: 0.5,
        price: 4350,
        maxKrewCapacity: 4,
        cargoSize: 2e3,
        baseheight: 3,
        width: 7,
        depth: 12.5,
        arcFront: 0.3,
        arcBack: 0,
        inertia: 0.5,
        radius: 10,
        speed: 5.1,
        labelHeight: 12,
        regeneration: 1,
        body: `trader`,
        sail: `trader`,
        scale: [5.5, 5.5, 5.5],
        offset: [0, -4.5, 1],
        rotation: [0, 0, 0]
    },
    5: {
        id: 5,
        image: `<img src="./assets/img/boat.png" style="height: 30px">`,
        name: `Boat 1`,
        hp: 450,
        turnspeed: 0.7,
        price: 6900,
        maxKrewCapacity: 5,
        cargoSize: 500,
        baseheight: 3,
        width: 7,
        depth: 12.5,
        arcFront: 0.3,
        arcBack: 0,
        inertia: 0.5,
        radius: 10,
        speed: 5.8,
        labelHeight: 12,
        regeneration: 1,
        body: `boat`,
        sail: `boat`,
        scale: [5, 5, 5],
        offset: [0, -4.5, 1],
        rotation: [0, 0, 0]
    },
    6: {
        id: 6,
        image: `<img src="./assets/img/boat.png" style="height: 35px">`,
        name: `Boat 2`,
        hp: 600,
        turnspeed: 0.7,
        price: 11e3,
        maxKrewCapacity: 6,
        cargoSize: 600,
        baseheight: 3,
        width: 7,
        depth: 12.5,
        arcFront: 0.3,
        arcBack: 0,
        inertia: 0.5,
        radius: 10,
        speed: 5.9,
        labelHeight: 12,
        regeneration: 1,
        body: `boat`,
        sail: `boat`,
        scale: [5, 5, 5],
        offset: [0, -4.5, 1],
        rotation: [0, 0, 0]
    },
    7: {
        id: 7,
        image: `<img src="./assets/img/boat.png" style="height: 40px">`,
        name: `Boat 3`,
        hp: 750,
        turnspeed: 0.7,
        price: 16e3,
        maxKrewCapacity: 7,
        cargoSize: 700,
        baseheight: 3,
        width: 7,
        depth: 12.5,
        arcFront: 0.3,
        arcBack: 0,
        inertia: 0.5,
        radius: 10,
        speed: 6.0,
        labelHeight: 12,
        regeneration: 1,
        body: `boat`,
        sail: `boat`,
        scale: [5, 5, 5],
        offset: [0, -4.5, 1],
        rotation: [0, 0, 0]
    },
    8: {
        id: 8,
        image: `<img src="./assets/img/destroyer.png" style="height: 35px">`,
        name: `Destroyer 1`,
        hp: 1200,
        turnspeed: 0.7,
        price: 5e4,
        maxKrewCapacity: 12,
        cargoSize: 1e3,
        baseheight: 5,
        width: 11.5,
        depth: 26,
        arcFront: 0.1,
        arcBack: 0,
        inertia: 1.0,
        radius: 15,
        speed: 5.9,
        labelHeight: 21,
        regeneration: 1,
        body: `destroyer`,
        sail: `destroyer`,
        scale: [6, 6, 6],
        offset: [0, -8, 0],
        rotation: [0, 0, 0]
    },
    9: {
        id: 9,
        image: `<img src="./assets/img/destroyer.png" style="height: 40px">`,
        name: `Destroyer 2`,
        hp: 1800,
        turnspeed: 0.7,
        price: 8e4,
        maxKrewCapacity: 14,
        cargoSize: 1300,
        baseheight: 5,
        width: 11.5,
        depth: 26,
        arcFront: 0.1,
        arcBack: 0,
        inertia: 1.0,
        radius: 15,
        speed: 5.8,
        labelHeight: 21,
        regeneration: 1,
        body: `destroyer`,
        sail: `destroyer`,
        scale: [6, 6, 6],
        offset: [0, -8, 0],
        rotation: [0, 0, 0]
    },
    10: {
        id: 10,
        image: `<img src="./assets/img/destroyer.png" style="height: 45px">`,
        name: `Destroyer 3`,
        hp: 2600,
        turnspeed: 0.7,
        price: 13e4,
        maxKrewCapacity: 16,
        cargoSize: 1600,
        baseheight: 5,
        width: 11.5,
        depth: 26,
        arcFront: 0.1,
        arcBack: 0,
        inertia: 1.0,
        radius: 15,
        speed: 5.7,
        labelHeight: 21,
        regeneration: 1,
        body: `destroyer`,
        sail: `destroyer`,
        scale: [6, 6, 6],
        offset: [0, -8, 0],
        rotation: [0, 0, 0]
    },
    11: {
        id: 11,
        image: `<img src="./assets/img/baby_fancy.png" style="height: 35px">`,
        name: `Baby Fancy`,
        hp: 300,
        turnspeed: 1,
        price: 8e3,
        maxKrewCapacity: 3,
        cargoSize: 600,
        baseheight: 1.4,
        width: 4,
        depth: 6.5,
        arcFront: 0.3,
        arcBack: 0,
        inertia: 0.1,
        radius: 8,
        speed: 5.9,
        labelHeight: 10,
        regeneration: 1,
        body: `babyFancy`,
        sail: `babyFancy`,
        mast: `babyFancy`,
        scale: [0.15, 0.18, 0.12],
        offset: [0, 5.5, 0],
        rotation: [0, 0, 0],
        availableAt: [`Spain`, `Brazil`, `Cuba`]
    },
    12: {
        id: 12,
        image: `<img src="./assets/img/royal_fortune.png" style="height: 35px">`,
        name: `Royal Fortune`,
        hp: 1e3,
        turnspeed: 0.5,
        price: 7e4,
        maxKrewCapacity: 15,
        cargoSize: 1200,
        baseheight: 4,
        width: 10,
        depth: 26,
        arcFront: 0.3,
        arcBack: 0,
        inertia: 0.5,
        radius: 15,
        speed: 6,
        labelHeight: 12,
        regeneration: 1,
        body: `royalFortune`,
        sail: `royalFortune`,
        mast: `royalFortune`,
        scale: [0.15, 0.15, 0.15],
        offset: [2, 11.6, 3],
        rotation: [0, Math.PI / 2, 0],
        availableAt: [`Labrador`, `Spain`, `Barbados`, `Taiwan`]
    },
    13: {
        id: 13,
        image: `<img src="./assets/img/calm_spirit.png" style="height: 35px">`,
        name: `Calm Spirit`,
        hp: 1800,
        turnspeed: 0.7,
        price: 12e4,
        maxKrewCapacity: 18,
        cargoSize: 2e3,
        baseheight: 4,
        width: 10,
        depth: 30,
        arcFront: 0.3,
        arcBack: 0,
        inertia: 0.5,
        radius: 16,
        speed: 5.9,
        labelHeight: 12,
        regeneration: 1,
        body: `calmSpirit`,
        sail: `calmSpirit`,
        mast: `calmSpirit`,
        scale: [0.1, 0.1, 0.1],
        offset: [1, 10, 5],
        rotation: [0, Math.PI / 2, 0],
        availableAt: [`Spain`, `Guinea`, `Cuba`]
    },
    14: {
        id: 14,
        image: `<img src="./assets/img/QBJ.png" style="height: 45px">`,
        name: `Queen Barb's Justice`,
        hp: 3e3,
        turnspeed: 0.7,
        price: 2e5,
        maxKrewCapacity: 20,
        cargoSize: 3e3,
        baseheight: 5,
        width: 8,
        depth: 38,
        arcFront: 0.09,
        arcBack: 0.05,
        inertia: 1.0,
        radius: 20,
        speed: 5.9,
        labelHeight: 21,
        regeneration: 1,
        body: `queenBarbsJustice`,
        sail: `queenBarbsJustice`,
        mast: `queenBarbsJustice`,
        scale: [0.1, 0.1, 0.1],
        offset: [1, 13.4, 1],
        rotation: [0, Math.PI / 2, 0],
        availableAt: [`Spain`, `Malaysia`]
    },
    15: {
        id: 15,
        image: `<img src="./assets/img/trader.png" style="height: 35px">`,
        name: `Trader 2`,
        hp: 500,
        turnspeed: 0.5,
        price: 18e3,
        maxKrewCapacity: 6,
        cargoSize: 4e3,
        baseheight: 3,
        width: 7,
        depth: 12.5,
        arcFront: 0.3,
        arcBack: 0,
        inertia: 0.5,
        radius: 10,
        speed: 5,
        labelHeight: 12,
        regeneration: 1,
        body: `trader`,
        sail: `trader`,
        scale: [5.5, 5.5, 5.5],
        offset: [0, -4.5, 1],
        rotation: [0, 0, 0],
        availableAt: [`Jamaica`]
    },
    16: {
        id: 16,
        image: `<img src="./assets/img/trader.png" style="height: 40px">`,
        name: `Trader 3`,
        hp: 750,
        turnspeed: 0.5,
        price: 45e3,
        maxKrewCapacity: 6,
        cargoSize: 6e3,
        baseheight: 3,
        width: 7,
        depth: 12.5,
        arcFront: 0.3,
        arcBack: 0,
        inertia: 0.5,
        radius: 10,
        speed: 4.9,
        labelHeight: 12,
        regeneration: 1,
        body: `trader`,
        sail: `trader`,
        scale: [5.5, 5.5, 5.5],
        offset: [0, -4.5, 1],
        rotation: [0, 0, 0],
        availableAt: [`Jamaica`]
    },
    17: {
        id: 17,
        image: `<img src="./assets/img/baby_fancy.png" style="height: 40px">`,
        name: `Baby Fancy 2`,
        hp: 500,
        turnspeed: 1,
        price: 3e4,
        maxKrewCapacity: 3,
        cargoSize: 900,
        baseheight: 1.4,
        width: 4.2,
        depth: 7,
        arcFront: 0.3,
        arcBack: 0,
        inertia: 0.1,
        radius: 8,
        speed: 5.8,
        labelHeight: 10,
        regeneration: 1,
        body: `babyFancy`,
        sail: `babyFancy`,
        mast: `babyFancy`,
        scale: [0.15, 0.18, 0.12],
        offset: [0, 5.5, 0],
        rotation: [0, 0, 0],
        availableAt: [`Jamaica`]
    },
    18: {
        id: 18,
        image: `<img src="./assets/img/royal_fortune.png" style="height: 40px">`,
        name: `Royal Fortune 2`,
        hp: 1300,
        turnspeed: 0.6,
        price: 11e4,
        maxKrewCapacity: 18,
        cargoSize: 1400,
        baseheight: 4,
        width: 10,
        depth: 26,
        arcFront: 0.3,
        arcBack: 0,
        inertia: 0.5,
        radius: 15,
        speed: 5.9,
        labelHeight: 12,
        regeneration: 1,
        body: `royalFortune`,
        sail: `royalFortune`,
        mast: `royalFortune`,
        scale: [0.15, 0.15, 0.15],
        offset: [2, 11.6, 3],
        rotation: [0, Math.PI / 2, 0],
        availableAt: [`Jamaica`, `Taiwan`]
    },
    19: {
        id: 19,
        image: `<img src="./assets/img/calm_spirit.png" style="height: 45px">`,
        name: `Calm Spirit 2`,
        hp: 2200,
        turnspeed: 0.7,
        price: 17e4,
        maxKrewCapacity: 20,
        cargoSize: 2600,
        baseheight: 4,
        width: 10,
        depth: 30,
        arcFront: 0.3,
        arcBack: 0,
        inertia: 0.5,
        radius: 16,
        speed: 5.8,
        labelHeight: 12,
        regeneration: 1,
        body: `calmSpirit`,
        sail: `calmSpirit`,
        mast: `calmSpirit`,
        scale: [0.1, 0.1, 0.1],
        offset: [1, 10, 5],
        rotation: [0, Math.PI / 2, 0],
        availableAt: [`Jamaica`]
    },
    20: {
        id: 20,
        image: `<img src="./assets/img/QBJ.png" style="height: 50px">`,
        name: `Queen Barb's Justice 2`,
        hp: 4e3,
        turnspeed: 0.7,
        price: 35e4,
        maxKrewCapacity: 25,
        cargoSize: 4e3,
        baseheight: 5,
        width: 8,
        depth: 38,
        arcFront: 0.09,
        arcBack: 0.05,
        inertia: 1.0,
        radius: 20,
        speed: 5.8,
        labelHeight: 21,
        regeneration: 1,
        body: `queenBarbsJustice`,
        sail: `queenBarbsJustice`,
        mast: `queenBarbsJustice`,
        scale: [0.1, 0.1, 0.1],
        offset: [1, 13.4, 1],
        rotation: [0, Math.PI / 2, 0],
        availableAt: [`Jamaica`]
    },
    21: {
        id: 21,
        image: `<img src="./assets/img/junkie.png" style="height: 35px">`,
        name: `Junkie`,
        hp: 1500,
        turnspeed: 0.7,
        price: 1e5,
        maxKrewCapacity: 8,
        cargoSize: 2e3,
        baseheight: 4,
        width: 10,
        depth: 34,
        arcFront: 0.2,
        arcBack: 0,
        inertia: 1.0,
        radius: 15,
        speed: 5.9,
        labelHeight: 21,
        regeneration: 1,
        body: `junkie`,
        sail: `junkie`,
        mast: `junkie`,
        scale: [0.12, 0.12, 0.12],
        offset: [0, 18, 0],
        rotation: [0, Math.PI / 2, 0],
        availableAt: [`Spain`, `Jamaica`, `Taiwan`]
    },
    22: {
        id: 22,
        image: `<img src="./assets/img/raider.png" style="height: 35px">`,
        name: `Raider`,
        hp: 1500,
        turnspeed: 0.9,
        price: 12e4,
        maxKrewCapacity: 6,
        cargoSize: 1e3,
        baseheight: 2,
        width: 5.6,
        depth: 22,
        arcFront: 0.18,
        arcBack: 0.18,
        inertia: 0.5,
        radius: 15,
        speed: 6.5,
        labelHeight: 12,
        regeneration: 1,
        body: `raider`,
        sail: `raider`,
        mast: `raider`,
        scale: [0.12, 0.12, 0.12],
        offset: [0, 19, -1],
        rotation: [0, Math.PI / 2, 0],
        availableAt: [`Spain`]
    },
    23: {
        id: 23,
        image: `<img src="./assets/img/bo.png" style="height: 35px">`,
        name: `Black Oyster`,
        hp: 6e3,
        turnspeed: 0.8,
        price: 55e4,
        maxKrewCapacity: 30,
        cargoSize: 1500,
        baseheight: 6,
        width: 10.5,
        depth: 42,
        arcFront: 0.1,
        arcBack: 0,
        inertia: 1.0,
        radius: 20,
        speed: 6.4,
        labelHeight: 25,
        regeneration: 3,
        body: `blackOyster`,
        sail: `blackOyster`,
        mast: `blackOyster`,
        scale: [0.12, 0.12, 0.12],
        offset: [1, 16.4, 1],
        rotation: [0, Math.PI / 2, 0],
        availableAt: [`Jamaica`]
    },
    24: {
        id: 24,
        image: `<img src="./assets/img/ft.png" style="height: 50px">`,
        name: `Fortune Trader`,
        hp: 7500,
        turnspeed: 0.6,
        price: 55e4,
        maxKrewCapacity: 20,
        cargoSize: 1e4,
        baseheight: 6.2,
        width: 15,
        depth: 64,
        arcFront: 0.14,
        arcBack: 0.12,
        inertia: 1.0,
        radius: 20,
        speed: 5,
        labelHeight: 25,
        regeneration: 1,
        body: `fortuneTrader`,
        sail: `fortuneTrader`,
        mast: `fortuneTrader`,
        scale: [0.16, 0.16, 0.16],
        offset: [0, 20, 7],
        rotation: [0, Math.PI / 2, 0],
        availableAt: [`Guinea`]
    }
};