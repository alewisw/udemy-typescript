

abstract class Spell {

  abstract get name(): string

  abstract cast(): void
}


enum FireSpellName 
{
  FireBolt = "Fire Bolt",
  FireWall = "Fire Wall",
  BigBang = "Big Bang"
}


class FireSpell extends Spell {
  private _name: FireSpellName
  readonly _damage: number = 20

  constructor(n: FireSpellName)
  {
    super()
    this._name = n
  }

  get name(): string { return this._name; }

  cast(): void {
    console.log(`${this.name} - Boom you are burning the enemy!  It took ${this._damage} burning damage!`)
  }
}


enum FrostSpellName 
{
  FrostBolt = "Frost Bolt",
  Blizzard = "Blizzard",
}


class FrostSpell extends Spell {
  private _name: FrostSpellName
  readonly _slowingRate: number = 0.5

  constructor(n: FrostSpellName)
  {
    super()
    this._name = n
  }

  get name(): string { return this._name; }

  cast(): void {
    console.log(`${this.name} - Brr you are freezing the enemy!  It was slowed by ${this._slowingRate}!`)
  }

}


//
// NOTE SPECIAL
//
type SpellName<S> = S extends FireSpell ? FireSpellName : FrostSpellName

class Wizard<T extends Spell> {
  private _spellBook: T[]

  constructor(spellBook: T[])
  {
    this._spellBook = spellBook
  }

  cast(name: SpellName<T>)
  {
    let spell = this._spellBook.find((spell) => { return spell.name === name});
    if (spell) {
      spell.cast()
    }
    else
    {
      throw Error(`No such spell ${name}`)
    }
  }

  castAll()
  {
    for (let spell of this._spellBook)
    {
      spell.cast()
    }
  }
}


let fireSpellArray: FireSpell[] = [ new FireSpell(FireSpellName.FireBolt), new FireSpell(FireSpellName.FireWall)]
let frostSpellArray: FrostSpell[] = [ new FrostSpell(FrostSpellName.FrostBolt), new FrostSpell(FrostSpellName.Blizzard)]

let fireWizard: Wizard<FireSpell> = new Wizard(fireSpellArray)
let frostWizard: Wizard<FrostSpell> = new Wizard(frostSpellArray)

fireWizard.castAll()
try {
  fireWizard.cast(FireSpellName.BigBang)
} catch (err : unknown)
{
  console.log(err)
}
frostWizard.castAll()
frostWizard.cast(FrostSpellName.Blizzard)

