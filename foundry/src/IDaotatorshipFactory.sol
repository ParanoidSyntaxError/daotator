// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

interface IDaotatorshipFactory {
    function newDaotatorship(
        address daotator,
        string memory governorName,
        string memory tokenName,
        string memory tokenSymbol,
        uint256 salePrice,
        uint256 saleDeadline
    ) external;
}
