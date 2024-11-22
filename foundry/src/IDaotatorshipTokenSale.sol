// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

interface IDaotatorshipTokenSale {
    struct Sale {
        uint256 price;
        uint256 deadline;
        address receiver;
    }

    function newSale(
        address token,
        uint256 price,
        uint256 deadline,
        address receiver
    ) external;
    
    function buy(address token, address receiver) external payable;
}
