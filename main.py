def MundoLevel(numeroLevel: number):
    if numeroLevel == 1:
        tiles.set_current_tilemap(tilemap("""
            level1
            """))
    elif numeroLevel == 3:
        tiles.set_current_tilemap(tilemap("""
            level3
            """))
    elif numeroLevel == 2:
        tiles.set_current_tilemap(tilemap("""
            level2
            """))
    tiles.place_on_random_tile(Guerreiro, sprites.dungeon.door_closed_east)

def on_a_pressed():
    global Sword
    Sword = True
    Guerreiro.set_image(img("""
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
        """))
    pause(500)
    Guerreiro.set_image(assets.image("""
        myImage
        """))
    Sword = False
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile(sprite, location):
    global Levelatual
    Levelatual = 1
    Levelatual = 2
    MundoLevel(Levelatual)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_red_crystal,
    on_overlap_tile)

def on_on_overlap(sprite2, otherSprite):
    if Sword == True:
        sprites.destroy(otherSprite, effects.fire, 500)
    else:
        info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

Sword = False
Mob: Sprite = None
Levelatual = 0
Guerreiro: Sprite = None
info.set_life(3)
Guerreiro = sprites.create(assets.image("""
    myImage
    """), SpriteKind.player)
controller.move_sprite(Guerreiro)
scene.set_background_color(13)
scene.camera_follow_sprite(Guerreiro)
Levelatual = 0
MundoLevel(1)
for index in range(4):
    Mob = sprites.create(img("""
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
            """),
        SpriteKind.enemy)
    Mob.follow(Guerreiro, 20)
    Mob.set_position(randint(10, 200), randint(10, 200))