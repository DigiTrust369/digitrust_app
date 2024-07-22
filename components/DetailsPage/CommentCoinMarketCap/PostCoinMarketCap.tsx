'use client'
import React, { Dispatch,useState, useEffect } from 'react'
import { Button } from '@nextui-org/button'
import LikeIcon from '@/icons/LikeIcon'
import CommentIcon from '@/icons/CommentIcon'
import ShareIcon from '@/icons/ShareIcon'
import BearIcon from '@/icons/Bear'
import BullIcon from '@/icons/Bull'
import ViewIcon from '@/icons/ViewIcon'

interface Data {
    id:string,
    bulled:boolean,
    beared:boolean,
    userAvatar: string,
    userName: string,
    postTime: string,
    content: string,
    postImage: string,
    bull: number,
    bear:number,
    comment:number,
    share:number,
    listComment:Array<Comment>
}

interface Comment{
    idComment:string,
    mainComment:string,
    listReply: Array<reply>
}

interface reply {
    idReply:string,
    mainReply:string
}

interface Props {
    data: Array<Data>,
    setLike: Dispatch<void>,
    setComment:Dispatch<void>,
    setShare:Dispatch<void>,
  }



const CommentCoinMarketCap = (props: Props) => {
    const [items, setItems] = useState(props.data);

    const bullUpdate = async(id:string) =>{
        const newItems = items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    bulled: !item.bulled,
                    bull: item.bulled ? item.bull - 1 : item.bull + 1
                };
            }
            return item;
        });
        
        setItems(newItems);
    }

    const bearUpdate = async(id:string) =>{
        const newItems = items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    beared: !item.beared,
                    bear: item.beared ? item.bear - 1 : item.bear + 1
                };
            }
            return item;
        });
        
        setItems(newItems);
    }



    const [isComment, setComment] = useState("0");
    function commentUpdate(){
        if(isComment == "0")
            setComment("1")
        else
            setComment("0")
    }

    let CommnetStyle;
    if (isComment === "0") {
        CommnetStyle = `text-[#989090]`;
    }
    else{
        CommnetStyle = `text-[#3251ec]`;
    }

    let LikeStyle = `text-[#989090]`;;
    // if (isLike === "0") {
    //     LikeStyle = `text-[#989090]`;
    // }
    // else{
    //     LikeStyle = `text-[#3251ec]`;
    // }

    function shareUpdate(){

    }

    return (
        <div>
            {items.map((d)=> (
                <div>
                    <div className="bg-card p-4">
                        <div className="flex items-center space-x-2 mb-2">
                            <img src={d.userAvatar} alt="User Avatar" className="rounded-full" />
                            <div>
                                <p className="font-semibold">{d.userName}</p>
                                <p className="text-muted-foreground text-sm">{d.postTime}</p>
                            </div>
                        </div>
                        <p className="mb-2">
                            <span className="text-primary">#BTC</span> <br />
                            <span className="text-muted-foreground">#{d.content}</span> <br />
                            <span className="text-primary">#ETF #ETFs #BTC</span>
                        </p>
                        <img src={d.postImage} alt="Post Image" className="w-full h-auto rounded-lg mb-2" />
                        <a href="#" className="text-primary">Read all...</a>
                    </div>
                    {d.listComment.map((comment)=> (
                        <div className='ml-4'>
                            <div>*{comment.mainComment}</div>
                            {comment.listReply.map((reply)=> (
                                <div className='ml-4'>-{reply.mainReply}</div>
                            ))}
                        </div>
                    ))}

                    <div className="flex items-center space-x-4 mb-4 ml-2">
                        <Button size='sm' color="primary" variant="light" startContent={<BearIcon />} onPress={async() => bearUpdate(d.id)}>
                            <p className={d.beared?"text-[#3251ec]":"text-[#989090]"}>{d.bear}</p>
                        </Button>
                        <Button size='sm' color="primary" variant="light" startContent={<BullIcon />} onPress={async() => bullUpdate(d.id)}>
                            <p className={d.bulled?"text-[#3251ec]":"text-[#989090]"}>{d.bull}</p>
                        </Button>
                        {/* <Button size='sm' color="primary" variant="light" startContent={<LikeIcon like = {d.liked?"1":"0"} />} onPress={async() => likeUpdate(d.id)}>
                            <p className={d.liked?"text-[#3251ec]":"text-[#989090]"}>{d.like}</p>
                        </Button> */}
                    </div>
                    <div className="flex items-center space-x-4 mb-4 ml-2">
                        <Button size='sm' color="primary" variant="light" startContent={<ViewIcon comment = {isComment} />} onPress={commentUpdate}>
                            <p className={CommnetStyle}>View</p>
                        </Button>
                        <Button size='sm' color="primary" variant="light" startContent={<CommentIcon comment = {isComment} />} onPress={commentUpdate}>
                            <p className={CommnetStyle}>Comment</p>
                        </Button>
                        <Button size='sm' color="primary" variant="light" startContent={<ShareIcon/>} onPress={shareUpdate}>
                            <p>Share</p>
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CommentCoinMarketCap