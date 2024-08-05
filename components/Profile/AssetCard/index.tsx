"use client";
import React, { useEffect, useState } from "react";

interface Asset {
  name: string,
  coinID: string,
  price: number,
  profitLoss1h: number,
  profitLoss24h: number,
  profitLoss7d: number,
  profitLoss: number,
  amount: number,
  avgBuyPrice: number,
}

interface allTimeProfitInterface{
  amount: string,
  percent: number
}


interface IAllTimeProfit{
  amount: string,
  profitloss: string,
}

interface IBestPerformer{
  coinID:string,
  amount: number,
  profitloss: string,
}
interface IWorstPerformer{
  coinID:string,
  amount: number,
  profitloss: string,
}


interface Props{
  AllTimeProfit: IAllTimeProfit,
  bestPerformer:IBestPerformer,
  worstPerformer:IWorstPerformer
}


const AssetCard = (props: Props) => {


  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="p-4 rounded-lg border bg-white shadow-md">
        <h3 className="font-semibold">All-time profit</h3>
        <p className="text-lg">{parseFloat(props.AllTimeProfit.amount.replace(",","")) < 0 ? '-' : ''}${props.AllTimeProfit.amount}</p>
        <p className={parseFloat(props.AllTimeProfit.amount.replace(",","")) < 0 ? "text-red-500" : parseFloat(props.AllTimeProfit.amount.replace(",","")) > 0 ? "text-green-500" : "text-black"}>
          {parseFloat(props.AllTimeProfit.amount.replace(",","")) < 0 ? "▼" : parseFloat(props.AllTimeProfit.amount.replace(",","")) > 0 ? "▲" : ""} {props.AllTimeProfit.profitloss}
        </p>
      </div>
      <div className="p-4 rounded-lg border bg-white shadow-md">
        <h3 className="font-semibold">Best Performer</h3>
        <p className="text-lg">{props.bestPerformer.coinID}</p>
        <p className={props.bestPerformer.amount < 0 ? "text-red-500" : props.bestPerformer.amount > 0 ? "text-green-500" : "text-black"}>
          {props.bestPerformer.amount>0?"+":props.bestPerformer.amount<0?"-":""}${props.bestPerformer.amount} {props.bestPerformer.amount>0?"▲":props.bestPerformer.amount<0?"▼":""} {props.bestPerformer.profitloss}</p>
      </div>
      <div className="p-4 rounded-lg border bg-white shadow-md">
        <h3 className="font-semibold">Worst Performer</h3>
        <p className="text-lg">{props.bestPerformer.coinID}</p>
        <p className={props.worstPerformer.amount < 0 ? "text-red-500" : props.bestPerformer.amount > 0 ? "text-green-500" : "text-black"}>
        {props.worstPerformer.amount>0?"+":props.worstPerformer.amount<0?"-":""}${props.worstPerformer.amount} {props.worstPerformer.amount>0?"▲":props.worstPerformer.amount<0?"▼":""} {props.worstPerformer.profitloss}</p>
      </div>
    </div>
  );
};

export default AssetCard;