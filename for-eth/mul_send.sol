uint256 public tokenAmountToAirdrop; 

function doAirdrop(address[] _recipients, uint256[] _balances) public {
    require(msg.sender == owner);
    for (uint256 i=0; i < _recipients.length; i++) {
        require(tokenAmountToAirdrop >= _balances[i]);
        tokenAmountToAirdrop = tokenAmountToAirdrop - _balances[i];
        balances[_recipients[i]] = balances[_recipients[i]] + _balances[i];
        Transfer(0x0, _recipients[i], _balances[i]);
    }
}