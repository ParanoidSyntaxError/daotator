// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {ERC20, IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC4626} from "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

import {TimelockController} from "@openzeppelin/contracts/governance/TimelockController.sol";

contract Daotatorship is ERC4626, ERC20Permit, TimelockController {
    uint8 private immutable _offset;

    uint256 private constant MAX_SUPPLY = 1_000_000_000;

    constructor(
        address underlyingAsset,
        uint8 offset,
        string memory name,
        string memory symbol,
        address admin
    )
        ERC4626(IERC20(underlyingAsset))
        ERC20(name, symbol)
        ERC20Permit(name)
        TimelockController(
            24 hours,
            new address[](0),
            new address[](0),
            address(this)
        )
    {
        _offset = offset;

        _grantRole(PROPOSER_ROLE, admin);
        _grantRole(CANCELLER_ROLE, admin);
        _grantRole(EXECUTOR_ROLE, address(0));

        _revokeRole(DEFAULT_ADMIN_ROLE, address(this));
    }

    function decimals() public view override(ERC4626, ERC20) returns (uint8) {
        return ERC4626.decimals();
    }

    function maxDeposit(address account) public view virtual override returns (uint256) {
        return convertToAssets(maxMint(account));
    }

    function maxMint(address) public view virtual override returns (uint256) {
        return _maxSupply() - totalSupply();
    }

    function _decimalsOffset() internal view override returns (uint8) {
        return _offset;
    }

    function _maxSupply() internal view returns (uint256) {
        return MAX_SUPPLY * (10 ** decimals());
    }
}
