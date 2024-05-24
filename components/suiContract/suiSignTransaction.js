import { useWallet } from '@suiet/wallet-kit';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';


const packageObjectId = '0xcbf322404c26d3385dc040f9a656f171686a2ca977e2aca2d005d2c14567d640';
const moduleVault = 'vault';
const moduleSocial = 'dgt_social';

const POOL_ID='0x9cc630558c73f1955ffb014aa58dcd0fcc9ad9ee6942ec0b7ee34c7bd0f5086b';
const ACCOUNT2_CAP='0xfdbb0880dc9deb47ba164a661eda4625f01110836db75b2fc15f800394ebe55b';
const SUI_COIN_ID='0x6a7c12263f583fb6307fb384b11ce3f3a636de378572bcf0f3ed6f83f95f31ff'; 
const CLOCK_OBJECT_ID='0x6';
const QUOTE_COIN_TYPE='0xe733afcdbcd61f8a795342dfb3cf4ea8977b3426a0f1df7a2bd3c50d23d1c99c::dgt::DGT';
const BASE_COIN_TYPE='0x2::sui::SUI';
const SUI_FEE_COIN_ID='0xb3098bccce11b1b729a24382b9b15a3c447d2d2ceda01e51a517620baa8370ca';
const BASE_COIN_ID='0x2f5cac79399b523413aee575dc7dad4919ba51533867dc04f14110698e19960d';
const ACCOUNT1_CAP_ID='0xfdbb0880dc9deb47ba164a661eda4625f01110836db75b2fc15f800394ebe55b';// your sui coin id in your wallet
const rpcUrl = getFullnodeUrl('testnet');

export const client = new SuiClient({ url: rpcUrl });

export function hello() {
    console.log('hello');
}

export async function placeBaseMarketOrder(wallet,chainValue,trust){
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageObjectId}::${moduleVault}::place_base_market_order`,
      typeArguments: [BASE_COIN_TYPE,QUOTE_COIN_TYPE],
      arguments: [tx.pure(POOL_ID),tx.pure(ACCOUNT2_CAP),tx.pure(SUI_COIN_ID),tx.pure(chainValue),tx.pure(trust)],
    });
    try{
      const res = await wallet.signAndExecuteTransactionBlock({
        transactionBlock: tx,
      });
      console.log(res);
    }
    catch{
      console.log('fail!!');
    }
}

export const copyVault  = async (wallet,vaultid,address) => {
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${packageObjectId}::${moduleSocial}::copyVault`,
    arguments: [tx.pure(vaultid),tx.pure(address)],
  });
  try{
    const res = await wallet.signAndExecuteTransactionBlock({
      transactionBlock: tx,
    });
    console.log(res);
    return res.digest;
  }
  catch{
    return null;
  }
};

export const managerAccount   = async (wallet) => {
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${packageObjectId}::${moduleVault}::manager_account`,
  });
  try{
    const res = await wallet.signAndExecuteTransactionBlock({
      transactionBlock: tx,
    });
    console.log(res);
    return res.digest;
  }
  catch{
    return null;
  }
};

export const makeBaseDeposit  = async (wallet,coinID) => {
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${packageObjectId}::${moduleVault}::make_base_deposit`,
    arguments: [tx.pure(POOL_ID),tx.pure(BASE_COIN_ID),tx.pure(coinID)],
    typeArguments: [BASE_COIN_TYPE,QUOTE_COIN_TYPE]
  });
  try{
    const res = await wallet.signAndExecuteTransactionBlock({
      transactionBlock: tx,
    });
    console.log(res);
    return res.digest;
  }
  catch{
    return null;
  }
};

export const createDGTVault   = async (wallet,suifeecoinID) => {
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${packageObjectId}::${moduleVault}::create_dgt_vault`,
    arguments: [tx.pure(suifeecoinID)],
    typeArguments: [BASE_COIN_TYPE,QUOTE_COIN_TYPE]
  });
  try{
    const res = await wallet.signAndExecuteTransactionBlock({
      transactionBlock: tx,
    });
    console.log(res);
    return res.digest;
  }
  catch{
    return null;
  }
};