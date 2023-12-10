import { throwError } from '../helpers';
import { SpellModel } from '../models/Spell.ts';

// @ts-ignore
export const getSpells = async (req, res) => {
  try {
    let spells = await SpellModel.find({});
    res.status(200).json({
      success: true,
      data: spells,
    });
  } catch (error) {
    throwError(error, res);
  }
}

// @ts-ignore
export const addSpell = async (req, res) => {
  try {
    // const {cityName, coordinates, userId, visitedDate} = req.body;
    const spell= new SpellModel({
      name: 'temp',
      link: 'temp',
      level: 'temp',
      type: 'temp',
      distance: 'temp',
      duration: 'temp',
      description: 'temp',
    })
    await spell.save();
    res.status(200).json({
      success: true,
      data: spell,
    });
  } catch (error) {
    throwError(error, res);
  }
}
