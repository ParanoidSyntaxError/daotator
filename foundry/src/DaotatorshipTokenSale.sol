// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {DaotatorshipToken} from "./DaotatorshipToken.sol";

import {IDaotatorshipTokenSale} from "./IDaotatorshipTokenSale.sol";

contract DaotatorshipTokenSale is IDaotatorshipTokenSale {
    mapping(address => Sale) private _sales;

    uint256 public constant MAX_SUPPLY = 1_000_000_000e18;

    constructor() {}

    function newSale(
        address token,
        uint256 price,
        uint256 deadline,
        address receiver
    ) external override {
        if (_sales[token].deadline != 0) {
            revert();
        }

        if (deadline <= block.timestamp) {
            revert();
        }

        _sales[token] = Sale(price, deadline, receiver);
    }

    function buy(address token, address receiver) external payable override {
        if (block.timestamp >= _sales[token].deadline) {
            revert();
        }

        (bool sent, ) = _sales[token].receiver.call{value: msg.value}("");
        if (!sent) {
            revert();
        }

        uint256 amount = msg.value / _sales[token].price;
        DaotatorshipToken(token).mint(receiver, amount);
    }
}
