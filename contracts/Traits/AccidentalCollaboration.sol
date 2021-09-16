//SPDX-License-Identifier: Unlicensed

pragma solidity >=0.6.0 <0.8.0;
pragma abicoder v2;

import "../Implementers/TraitUint8ArrayValueImplementer.sol";

contract AccidentalCollaboration is TraitUint8ArrayValueImplementer {
    constructor(address _registry, uint16 _traitId) TraitUint8ArrayValueImplementer(_registry, _traitId) {}
}
