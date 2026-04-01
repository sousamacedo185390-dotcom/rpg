function MundoLevel(numeroLevel: number) {
    if (numeroLevel == 1) {
        tiles.setCurrentTilemap(tilemap`
            level1
            `)
    } else if (numeroLevel == 3) {
        tiles.setCurrentTilemap(tilemap`
            level3
            `)
    } else if (numeroLevel == 2) {
        tiles.setCurrentTilemap(tilemap`
            level2
            `)
    }
    
    tiles.placeOnRandomTile(Guerreiro, sprites.dungeon.doorClosedEast)
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    Sword = true
    Guerreiro.setImage(img`
        ........................
        ........................
        .......ff...............
        .....ff22ff.............
        ...fff2222fff...........
        ..fff222222fff..........
        ..fff222222fff..........
        ..feeeeeeeeeeff.........
        .ffe22222222eff.........
        .fffffeeeefffff.........
        fdfefbf44fbfeff.........
        fbfe41fddf14ef..........
        fbffe4dddd4efe..........
        fcfef22222f4e...........
        .ff4f44554f4e...........
        ....ffffffdde...........
        .....ffffedde...........
        ..........ee............
        .........ccc............
        ........cc1cc...........
        .........c1c............
        .........c1c............
        .........c1c............
        .........c1c............
        `)
    pause(500)
    Guerreiro.setImage(assets.image`
        myImage
        `)
    Sword = false
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    
    Levelatual = 1
    Levelatual = 2
    MundoLevel(Levelatual)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap(sprite2: Sprite, otherSprite: Sprite) {
    if (Sword == true) {
        sprites.destroy(otherSprite, effects.fire, 500)
    } else {
        info.changeLifeBy(-1)
    }
    
})
let Sword = false
let Mob : Sprite = null
let Levelatual = 0
let Guerreiro : Sprite = null
info.setLife(3)
Guerreiro = sprites.create(assets.image`
    myImage
    `, SpriteKind.Player)
controller.moveSprite(Guerreiro)
scene.setBackgroundColor(13)
scene.cameraFollowSprite(Guerreiro)
Levelatual = 0
MundoLevel(1)
for (let index = 0; index < 4; index++) {
    Mob = sprites.create(img`
            . . f f f . . . . . . . . f f f
            . f f c c . . . . . . f c b b c
            f f c c . . . . . . f c b b c .
            f c f c . . . . . . f b c c c .
            f f f c c . c c . f c b b c c .
            f f c 3 c c 3 c c f b c b b c .
            f f b 3 b c 3 b c f b c c b c .
            . c b b b b b b c b b c c c . .
            . c 1 b b b 1 b b c c c c . . .
            c b b b b b b b b b c c . . . .
            c b c b b b c b b b b f . . . .
            f b 1 f f f 1 b b b b f c . . .
            f b b b b b b b b b b f c c . .
            . f b b b b b b b b c f . . . .
            . . f b b b b b b c f . . . . .
            . . . f f f f f f f . . . . . .
            `, SpriteKind.Enemy)
    Mob.follow(Guerreiro, 20)
    Mob.setPosition(randint(10, 200), randint(10, 200))
}
