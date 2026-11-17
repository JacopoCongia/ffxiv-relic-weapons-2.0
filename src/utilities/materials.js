// Pure functions for the materials math shown under each weapon section.
// "Owned" counts are main-hand weapons only (see ownedWeapons.js): a Paladin
// shield never needs its own materials.

// Amount of a material still needed. Can be negative if the data asks for
// less than the owned weapons used; displayAmount() clamps it for display.
export function remainingMaterial(material, ownedMainHandCount) {
  return material.reqTotal - material.reqPerWeapon * ownedMainHandCount;
}

// Tomestones still needed: `perWeapon` for each main-hand weapon not yet owned
export function remainingTomestones(
  mainHandTotal,
  ownedMainHandCount,
  perWeapon,
) {
  return mainHandTotal * perWeapon - ownedMainHandCount * perWeapon;
}

// A material is done once nothing more is needed
export function isMaterialDone(amount) {
  return amount <= 0;
}

// The number shown on a material card: never below 0
export function displayAmount(amount) {
  return isMaterialDone(amount) ? 0 : amount;
}
