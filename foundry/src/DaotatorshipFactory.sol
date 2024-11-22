// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {IVotes} from "@openzeppelin/contracts/governance/utils/IVotes.sol";
import {TimelockController} from "@openzeppelin/contracts/governance/TimelockController.sol";

import {DaotatorshipToken} from "./DaotatorshipToken.sol";
import {Daotatorship} from "./Daotatorship.sol";
import {IDaotatorshipTokenSale} from "./IDaotatorshipTokenSale.sol";
import {IDaotatorshipFactory} from "./IDaotatorshipFactory.sol";

contract DaotatorshipFactory is IDaotatorshipFactory {
    address public immutable tokenSale;

    constructor(address _tokenSale) {
        tokenSale = _tokenSale;
    }

    function newDaotatorship(
        address daotator,
        string memory governorName,
        string memory tokenName,
        string memory tokenSymbol,
        uint256 salePrice,
        uint256 saleDeadline
    ) external override {
        address[] memory emptyAddressArray = new address[](0);
        address[] memory zeroAddressArray = new address[](1);
        zeroAddressArray[0] = address(0);
        TimelockController timelockController = new TimelockController(
            24 hours,
            emptyAddressArray,
            zeroAddressArray,
            address(this)
        );

        address token = address(
            new DaotatorshipToken(tokenName, tokenSymbol, tokenSale)
        );
        IDaotatorshipTokenSale(tokenSale).newSale(
            token,
            salePrice,
            saleDeadline,
            address(timelockController)
        );

        Daotatorship daotatorship = new Daotatorship(
            daotator,
            governorName,
            IVotes(token),
            timelockController
        );

        timelockController.grantRole(
            timelockController.PROPOSER_ROLE(),
            address(daotatorship)
        );
        timelockController.grantRole(
            timelockController.CANCELLER_ROLE(),
            address(daotatorship)
        );
        timelockController.renounceRole(
            timelockController.DEFAULT_ADMIN_ROLE(),
            address(this)
        );
    }
}
