import {Tabs, Tab, Card, CardHeader, CardBody, CardFooter, Avatar, Button,ScrollShadow} from "@nextui-org/react";
import { useEffect, useState } from "react";
import CommentCoinMarketCap from "./PostCoinMarketCap";
import { useGlobalContext } from "@/Context/store";

export default function Comment() {
    let tabs = [
        {
          id: "top",
          label: "top",
        },
        {
          id: "latest",
          label: "latest",
        }
    ];

    const [isFollowed, setIsFollowed] = useState(false);
    const [content, setContent] = useState("");
    const { userEmail } = useGlobalContext();

    let dataTop =[
        {
            id:"1",
            userAvatar: "https://placehold.co/40x40",
            userName: "@alvinichi",
            postTime: "6h",
            content: "Bitcoin start invest time",
            bull: ["nhatlapross@gmail.com","nhatlapross1@gmail.com","nhatlapross2@gmail.com"],
            bear: ["nhatlapross@gmail.com"],
            share:["nhatlapross@gmail.com","nhatlapross1@gmail.com","nhatlapross2@gmail.com"],
            listComment:[
                {
                    idComment:"1",
                    userName:"alvin",
                    userAvatar: "https://placehold.co/40x40",
                    mainComment:"Hello world",
                    listReply:[
                        {
                            idReply:"1",
                            userName:"ichi",
                            userAvatar: "https://placehold.co/40x40",
                            mainReply:"Hi World"
                        }
                    ]
                },
                {
                    idComment:"2",
                    userName:"alvin",
                    userAvatar: "https://placehold.co/40x40",
                    mainComment:"I'm here",
                    listReply:[
                    ]
                }
            ]
        },
        {
            id:"2",
            userAvatar: "https://placehold.co/40x40",
            userName: "@marsivi",
            postTime: "2h",
            content: "Bitcoin ETH awsome",
            bull: ["nhatlapross@gmail.com","nhatlapross1@gmail.com","nhatlapross2@gmail.com"],
            bear: ["nhatlapross@gmail.com"],
            share:["nhatlapross@gmail.com","nhatlapross1@gmail.com","nhatlapross2@gmail.com"],
            listComment:[
                {
                    idComment:"1",
                    userName:"alvin",
                    userAvatar: "https://placehold.co/40x40",
                    mainComment:"Great",
                    listReply:[
                        {
                            idReply:"1",
                            userName:"hello",
                            userAvatar: "https://placehold.co/40x40",
                            mainReply:"Good Job!"
                        },
                        {
                            idReply:"2",
                            userName:"ichi",
                            userAvatar: "https://placehold.co/40x40",
                            mainReply:"That's good!"
                        },
                    ]
                }
            ]
        },
    ]

    let dataLast =[
        {
            id:"3",
            userAvatar: "https://placehold.co/40x40",
            userName: "@tulatula",
            postTime: "1h",
            content: "go go to the future",
            bull: ["nhatlapross@gmail.com","nhatlapross1@gmail.com","nhatlapross2@gmail.com"],
            bear: ["nhatlapross@gmail.com"],
            share:["nhatlapross@gmail.com","nhatlapross1@gmail.com","nhatlapross2@gmail.com"],
            listComment:[]
        },
        {
            id:"4",
            userAvatar: "https://placehold.co/40x40",
            userName: "@vovi",
            postTime: "1h",
            content: "Bitcoin ETH awsome",
            bull: ["nhatlapross@gmail.com","nhatlapross1@gmail.com","nhatlapross2@gmail.com"],
            bear: ["nhatlapross@gmail.com"],
            share:["nhatlapross@gmail.com","nhatlapross1@gmail.com","nhatlapross2@gmail.com"],
            listComment:[]
        },
        {
            id:"5",
            userAvatar: "https://placehold.co/40x40",
            userName: "@marsivi",
            postTime: "2h",
            content: "Bitcoin ETH awsome",
            bull: ["nhatlapross@gmail.com","nhatlapross1@gmail.com","nhatlapross2@gmail.com"],
            bear: ["nhatlapross@gmail.com"],
            share:["nhatlapross@gmail.com","nhatlapross1@gmail.com","nhatlapross2@gmail.com"],
            listComment:[]
        },
    ]

    function getRandomInt(max:number) {
        return Math.floor(Math.random() * max);
    }
    const [itemsTop, setItemsTop] = useState(dataTop);
    const [itemsLast, setItemsLast] = useState(dataLast);
    const newPost = () =>{
        const newItem = {
            id:getRandomInt(99999).toString(),
            userAvatar: "https://placehold.co/40x40",
            userName: userEmail,
            postTime: new Date().getHours().toString()+"h",
            content: content,
            bull: [],
            bear: [],
            share:[],
            listComment:[]
        };
        setItemsTop(prevItems => [...prevItems, newItem]);
        setItemsLast(prevItems => [...prevItems, newItem]);
        setContent("");
    }

    function setLike(){
        console.log("Like")
    }

    function setComment(){
        console.log("Comment")
    }

    function setShare(){
        console.log("Share")
    }

    useEffect(() => {
        // This will run whenever the data prop changes
        // You can update your component's state here if needed
    }, [itemsTop]);

    return (
    <div>
        <div className="p-4 border-b flex justify-between items-center">
            <div className="flex gap-5">
                <Avatar isBordered radius="full" size="md" src="https://th.bing.com/th/id/R.d7aee691faadd1ebbbea18147c248042?rik=YiWu%2fNx0ygvlJw&pid=ImgRaw&r=0" />
                <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">Bitcoin</h4>
                    <h5 className="text-small tracking-tight text-default-400">1.6M Followers</h5>
                </div>
            </div>
            <Button
                className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                color="primary"
                radius="full"
                size="sm"
                variant={isFollowed ? "bordered" : "solid"}
                onPress={() => setIsFollowed(!isFollowed)}
            >
                {isFollowed ? "Unfollow" : "Follow"}
            </Button>
        </div>
        <div className="flex-grow overflow-auto p-4">
            <Tabs aria-label="Dynamic tabs" 
                items={tabs}
                className="w-full text-base font-medium leading-7"
                classNames={{
                    tabList: "w-full",
                    tab: "flex-1 px-0",
                }}
            >
                {(item) => (
                <Tab key={item.id} title={item.label}>
                    <ScrollShadow className="h-[450px] scrollbar-hide">
                    {item.id == "top" && 
                        <CommentCoinMarketCap data={itemsTop} setLike={setLike} setComment={setComment} setShare={setShare} />   
                    }
                    {item.id == "latest" && 
                        <CommentCoinMarketCap data={itemsLast} setLike={setLike} setComment={setComment} setShare={setShare} />   
                    }
                    </ScrollShadow>
                </Tab>
                )}
            </Tabs>
        </div>
        <div className="p-4 border-t flex items-center">
            <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full mr-2" />
            <input type="text" 
                placeholder="Post your comment..." 
                className="flex-grow w-full bg-input text-foreground p-2 rounded-lg mr-2"
                onChange={(event) => setContent(event.target.value)} />
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded" onClick={() => newPost()}>Post</button>
        </div>
    </div>
    )
}