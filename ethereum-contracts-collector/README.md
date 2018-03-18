#ETHEREUM CONTRACTS COLLECTOR

This app collects all contracts from blocks you can specify in config file. Contracts are written with links to them in linksX.txt file and to crawler code in codeX.txt.

```
{
  "blocks": {
    "lastBlock": 5000000,
    "blocksToScan": 10,
    "step": 5
  }
}
```

*   lastBlock - highest block - 1 to scan 
*   blocksToScan - how many block to scan. First block = lastBlock - blocksToScan. Scan range [startBlock, lastBlock)
*   step - blocks count to scan and then write to file. Step is repeated till scans all blocks from range
