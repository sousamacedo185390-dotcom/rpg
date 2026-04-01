// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000f01010101010101010101010101010e0101010101010a010a010101010101010101010101010a09090a0102010101010101010101010a0c0c0a0a01010101010101010101010a0a0a0a0101010101010101010101010a010a010101010101010101010101010101010101010101010101030404050101010102010101010101010607070801010101010101010101010101010101010101010101020101010101010101010101010101010101010101030404040501010101010101010101010d0d0b0d0b01010101010101010101010b0d0b0d0b01010101010101010101010b0d0d0b0d0b010101010101010101010b0b0b0b0d0d0b010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles17,sprites.builtin.forestTiles18,sprites.builtin.forestTiles19,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.doorOpenEast], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010100000000000000000001010101010100010000000000000001010001010101010100000000000001010101010101010101000000000000010101010101010101010000000000010001000101000001010100000000000101010101010101010101000000000000010101010101010100010000000000000101010101010100000100000000000000000001010101010100000000000000000000000000000000000000000000030000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.doorClosedEast,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100008080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080803030303030808080808080808080802040404060308080808080808080808080303030503080808080808080808080808080305030808080808080808080808080803050308080808080808080808080808030503080808080808080808080808080305030808080808080808080803030303050308080808080808080808030604040703080808080808080808080305030303030808080808080808080801070808080808080808080808080808`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.doorClosedEast,sprites.skillmap.islandTile4,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection4,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
