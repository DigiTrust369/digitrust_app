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
import leofiNotextLogo from "@/assets/images/leofi_notext.png";
import Image, { StaticImageData } from "next/image";

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
}

interface reply {
    idReply:string,
    userAvatar: string,
    userName: string,
    mainReply:string
}

interface Props {
    data: Array<Data>,
    coinID:string,
    setBull: (id: string) => void,
    setBear: (id: string) => void,
    setComment: (id: string) => void,
    setShare: (id: string) => void,
  }



const CommentCoinMarketCap = (props: Props) => {
    const [items, setItems] = useState<Array<Data>>(props.data);
    const { userEmail } = useGlobalContext();
    const [curPost,setCurPost] = useState("");

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
        props.setBull(id);
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
        props.setBear(id);
    }


    const [isComment, setComment] = useState("0");
    function commentUpdate(id: string) {
        setCurPost(curPost === id ? "" : id);
        props.setComment(id);
    }

    let CommnetStyle;
    if (isComment === "0") {
        CommnetStyle = `text-[#989090]`;
    }
    else{
        CommnetStyle = `text-[#3251ec]`;
    }


    function shareUpdate(id:any){
        props.setShare(id);
    }

    useEffect(() => {
        console.log(props.data)
        setItems(props.data);
    }, [props.data]);

    return (
        <div>
            {items.map((d)=> (
                <div>
                    <div className="bg-card p-4">
                        <div className="flex items-center space-x-2 mb-2">
                            {d.userAvatar != null && d.userAvatar != "https://placehold.co/40x40"?
                             <img src={d.userAvatar} alt="User Avatar" className="rounded-full" />
                             :<Image className="rounded-full mr-2 bg-orange-200" src={leofiNotextLogo} alt="User Avatar" width={28} height={28}/>
                            }
                            
                            <div>
                                <p className="font-semibold">{d.userName}</p>
                                <p className="text-muted-foreground text-sm">{d.postTime}</p>
                            </div>
                        </div>
                        <p className="mb-2">
                            <span className="text-primary">#{props.coinID}</span> <br />
                            <span className="text-primary">{d.content}</span> <br />
                        </p>
                    </div>
                    {d.listComment.map((comment) => (
                        <div key={comment.idComment} className='ml-5'>
                            <div className="flex items-center space-x-2 mb-2 bg-orange-200 rounded-2xl">
                                {comment.userAvatar != null ? (
                                    <img src={comment.userAvatar} alt="User Avatar" className="rounded-full" />
                                ) : (
                                    <Image className="rounded-full mr-2 bg-orange-100" src={leofiNotextLogo} alt="User Avatar" width={28} height={28}/>
                                )}
                                <div>
                                    <p className="font-semibold">{comment.userName}</p>
                                </div>
                                <div>
                                    <p>{comment.mainComment}</p>
                                </div>
                            </div>
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
                        <Button size='sm' color="primary" variant="light" startContent={<ViewIcon />}>
                            <p className={CommnetStyle}>View</p>
                        </Button>
                        <Button 
                            size='sm' 
                            color="primary" 
                            variant="light" 
                            startContent={<CommentIcon comment={curPost === d.id} />} 
                            onPress={() => commentUpdate(d.id)}
                        >
                            <p className={curPost === d.id ? "text-[#3251ec]" : "text-[#989090]"}>Comment</p>
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