
class Player {
  constructor(name, role, image, location) {
    this.info = {
      name,
      role,
      image,
      location
    };
    this.stats = roles[role];
    this.bag = {};
  }

};

const roles = {
  tank: {
    // health
    // attack
    // defense
    // attackType
  },
  assasin: {
    // health
    // attack
    // defense
    // attackType
  },
  ranger: {
    // health
    // attack
    // defense
    // attackType
  },
  warrior: {
    // health
    // attack
    // defense
    // attackType
  },
  healer: {
    // health
    // attack
    // defense
    // attackType
  },
  mage: {
    // health
    // attack
    // defense
    // attackType
  }
};

class Enemy {
  constructor(type, location, image) {
    this.info = {
      type,
      location,
      image
    };

    this.stats = enemyTypes[type];
  }
};

const enemyTypes = {
  // make these whatever you want
  tank: {
    // health
    // attack
    // defense
    // attackType
  },
  assasin: {
    // health
    // attack
    // defense
    // attackType
  },
  ranger: {
    // health
    // attack
    // defense
    // attackType
  },
  warrior: {
    // health
    // attack
    // defense
    // attackType
  },
  healer: {
    // health
    // attack
    // defense
    // attackType
  },
  mage: {
    // health
    // attack
    // defense
    // attackType
  }
};

const player1 = new Player();
const enemy1 = new Enemy();

module.exports = {
  player1,
  enemy1
};
