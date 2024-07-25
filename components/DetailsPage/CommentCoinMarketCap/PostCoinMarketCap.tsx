'use client'
import React, { Dispatch,useState, useEffect } from 'react'
import { Button } from '@nextui-org/button'
import LikeIcon from '@/icons/LikeIcon'
import CommentIcon from '@/icons/CommentIcon'
import ShareIcon from '@/icons/ShareIcon'
import BearIcon from '@/icons/Bear'
import BullIcon from '@/icons/Bull'
import ViewIcon from '@/icons/ViewIcon'
import { useGlobalContext } from "@/Context/store";

interface Data {
    id:string,
    profile_id:string,
    userAvatar: string,
    userName: string,
    postTime: string,
    content: string,
    bull: string[],
    bear:string[],
    share:string[],
    listComment:Array<Comment>
}

interface Comment{
    idComment:string,
    userAvatar: string,
    userName: string,
    mainComment:string,
    listReply: Array<reply>
}

interface reply {
    idReply:string,
    userAvatar: string,
    userName: string,
    mainReply:string
}

interface Props {
    data: Array<Data>,
    setLike: Dispatch<void>,
    setComment:Dispatch<void>,
    setShare:Dispatch<void>,
  }



const CommentCoinMarketCap = (props: Props) => {
    const [items, setItems] = useState<Array<Data>>(props.data);
    const { userEmail } = useGlobalContext();

    function removeStringFromArray(arr: string[], stringToRemove: string): string[] {
        return arr.filter(item => item !== stringToRemove);
    }

    function addStringToNewArray(arr: string[], stringToAdd: string): string[] {
        return [...arr, stringToAdd];
    }

    function checkArrayForStringCaseInsensitive(arr: string[], searchString: string): boolean {
        return arr.some(item => item.toLowerCase() === searchString.toLowerCase());
    }

    const bullUpdate = async(id:string) =>{
        const newItems = items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    bull: !checkArrayForStringCaseInsensitive(item.bull,userEmail) ? addStringToNewArray(item.bull,userEmail): removeStringFromArray(item.bull, userEmail)
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
                    bear: !checkArrayForStringCaseInsensitive(item.bear,userEmail) ? addStringToNewArray(item.bear,userEmail) : removeStringFromArray(item.bear, userEmail)
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
                            <span className="text-primary">{d.content}</span> <br />
                        </p>
                    </div>
                    {d.listComment.map((comment)=> (
                        <div className='ml-5'>
                            <div className="flex items-center space-x-2 mb-2 bg-gray-100 rounded-2xl">
                                {comment.userAvatar != null ? (<img src={comment.userAvatar} alt="User Avatar" className="rounded-full" />)
                                    :(<img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full" />)}
                                <div>
                                    <p className="font-semibold">{comment.userName}</p>
                                </div>
                                <div>
                                    <p>{comment.mainComment}</p>
                                </div>
                            </div>
                            {comment.listReply.map((reply)=> (
                                <div className='ml-6'>
                                    <div className="flex items-center space-x-2 mb-2 bg-gray-200 rounded-2xl">
                                        {reply.userAvatar !=null ? (<img src={reply.userAvatar} alt="User Avatar" className="rounded-full" />)
                                        :(<img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full" />)}
                                        <div>
                                            <p className="font-semibold">{reply.userName}</p>
                                        </div>
                                        <div>
                                            <p>{reply.mainReply}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}

                    <div className="flex items-center space-x-4 mb-4 ml-2">
                        <Button size='sm' color="primary" variant="light" startContent={<BearIcon />} onPress={async() => bearUpdate(d.id)}>
                            <p className={checkArrayForStringCaseInsensitive(d.bear,userEmail)?"text-[#3251ec]":"text-[#989090]"}>{d.bear.length}</p>
                        </Button>
                        <Button size='sm' color="primary" variant="light" startContent={<BullIcon />} onPress={async() => bullUpdate(d.id)}>
                            <p className={checkArrayForStringCaseInsensitive(d.bull,userEmail)?"text-[#3251ec]":"text-[#989090]"}>{d.bull.length}</p>
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