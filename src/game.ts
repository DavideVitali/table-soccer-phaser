import 'phaser';

export default class Demo extends Phaser.Scene
{
    constructor ()
    {
        super('TableSoccer');
    }

    preload ()
    {
        this.load.image('field', 'img/map.png');
    }

    create ()
    {
        this.add.image(944, 460, 'field');
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 1888,
    height: 920,
    scene: Demo,
};

const game = new Phaser.Game(config);
