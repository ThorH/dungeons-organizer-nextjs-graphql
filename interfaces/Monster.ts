export interface MonsterInterface {
    index: string,
    name: string,
    type: string
    size: String
    alignment: string
    armor_class: number
    hit_points: number
    hit_dice: string
    hit_points_roll: string
    speed: {
        walk?: string
        swim?: string
        fly?: string
    }
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    languages: string
    challenge_rating: number
    xp: number
}