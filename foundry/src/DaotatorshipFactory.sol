// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Daotatorship} from "./Daotatorship.sol";

contract DaotatorshipFactory {
    constructor() {}

    function newDaotatorship(
        address underlyingAsset,
        uint8 offset,
        string memory name,
        string memory symbol,
        address admin
    ) external returns (address) {
        return address(new Daotatorship(
            underlyingAsset,
            offset,
            name,
            symbol,
            admin
        ));
    }
}
