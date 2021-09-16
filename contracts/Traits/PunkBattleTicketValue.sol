//SPDX-License-Identifier: Unlicensed

pragma solidity >=0.6.0 <0.8.0;
pragma abicoder v2;

import "../Implementers/TraitUint8ValueImplementer.sol";

contract PunkBattleTicketValue is TraitUint8ValueImplementer {

    constructor(address _registry, uint16 _traitId) 
        TraitUint8ValueImplementer(_registry, _traitId) {}

}