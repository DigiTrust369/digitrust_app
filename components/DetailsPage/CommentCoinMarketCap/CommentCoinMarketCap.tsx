import { Tabs, Tab, Card, CardHeader, CardBody, CardFooter, Avatar, Button, ScrollShadow } from "@nextui-org/react";
import { useEffect, useState } from "react";
import CommentCoinMarketCap from "./PostCoinMarketCap";
import { useGlobalContext } from "@/Context/store";
import { IdentificationIcon } from "@heroicons/react/20/solid";

async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

export default function Comment(Props: any) {
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
    const [dataTopPost, setDataTopPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let dataTop = [
        {
            id: "1",
            profile_id: "pn_v1",
            userAvatar: "https://placehold.co/40x40",
            userName: "@alvinichi",
            postTime: "6h",
            content: "Bitcoin start invest time",
            bull: ["nhatlapross@gmail.com", "nhatlapross1@gmail.com", "nhatlapross2@gmail.com"],
            bear: ["nhatlapross@gmail.com"],
            share: ["nhatlapross@gmail.com", "nhatlapross1@gmail.com", "nhatlapross2@gmail.com"],
            listComment: [
                {
                    idComment: "1",
                    userName: "alvin",
                    userAvatar: "https://placehold.co/40x40",
                    mainComment:"Hello world",
                    mainComment: "Hello world",
                    listReply: [
                        {
                            idReply: "1",
                            userName: "ichi",
                            userAvatar: "https://placehold.co/40x40",
                            mainReply: "Hi World"
                        }
                    ]
                },
                {
                    idComment: "2",
                    userName: "alvin",
                    userAvatar: "https://placehold.co/40x40",
                    mainComment:"I'm here",
                }
            ]
        },
        {
            id: "2",
            profile_id: "pn_v1",
            userAvatar: "https://placehold.co/40x40",
            userName: "@marsivi",
            postTime: "2h",
            content: "Bitcoin ETH awsome",
            bull: ["nhatlapross@gmail.com", "nhatlapross1@gmail.com", "nhatlapross2@gmail.com"],
            bear: ["nhatlapross@gmail.com"],
            share: ["nhatlapross@gmail.com", "nhatlapross1@gmail.com", "nhatlapross2@gmail.com"],
            listComment: [
                {
                    idComment: "1",
                    userName: "alvin",
                    userAvatar: "https://placehold.co/40x40",
                    mainComment:"Great"
                }
            ]
        },
    ]

    let dataLast = [
        {
            id: "3",
            profile_id: "pn_v1",
            userAvatar: "https://placehold.co/40x40",
            userName: "@tulatula",
            postTime: "1h",
            content: "go go to the future",
            bull: ["nhatlapross@gmail.com", "nhatlapross1@gmail.com", "nhatlapross2@gmail.com"],
            bear: ["nhatlapross@gmail.com"],
            share: ["nhatlapross@gmail.com", "nhatlapross1@gmail.com", "nhatlapross2@gmail.com"],
            listComment: []
        },
        {
            id: "4",
            profile_id: "pn_v1",
            userAvatar: "https://placehold.co/40x40",
            userName: "@vovi",
            postTime: "1h",
            content: "Bitcoin ETH awsome",
            bull: ["nhatlapross@gmail.com", "nhatlapross1@gmail.com", "nhatlapross2@gmail.com"],
            bear: ["nhatlapross@gmail.com"],
            share: ["nhatlapross@gmail.com", "nhatlapross1@gmail.com", "nhatlapross2@gmail.com"],
            listComment: []
        },
        {
            id: "5",
            profile_id: "pn_v1",
            userAvatar: "https://placehold.co/40x40",
            userName: "@marsivi",
            postTime: "2h",
            content: "Bitcoin ETH awsome",
            bull: ["nhatlapross@gmail.com", "nhatlapross1@gmail.com", "nhatlapross2@gmail.com"],
            bear: ["nhatlapross@gmail.com"],
            share: ["nhatlapross@gmail.com", "nhatlapross1@gmail.com", "nhatlapross2@gmail.com"],
            listComment: []
        },
    ]

    useEffect(() => {
        const fetchData = async () => {  
            await getData();
        }
        fetchData();
    }, []);

    const getData = async() =>{  
        setIsLoading(true);
        await postData(`${process.env.NEXT_PUBLIC_PROFILE_URL}/v1/profile/post`,{}).then
        ((data) => {
             setDataTopPost(data);
             setIsLoading(false);
         })
    }

    useEffect(() => {
        // This will run whenever dataTopPost changes
        console.log("Updated dataTopPost:", dataTopPost);
        // Perform any operations that depend on dataTopPost here
    }, [dataTopPost]);

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }
    // const [itemsTop, setItemsTop] = useState(dataTop);
    // const [itemsLast, setItemsLast] = useState(dataLast);
    const [curPost,setCurPost] = useState("");
    const newPost = async() =>{
        if(curPost == "")
        {
            // const newItem = {
            //     id:getRandomInt(99999).toString(),
            //     profile_id:"pn_v1",
            //     userAvatar: "https://placehold.co/40x40",
            //     userName: userEmail,
            //     postTime: new Date().getHours().toString()+"h",
            //     content: content,
            //     bull: [],
            //     bear: [],
            //     share:[],
            //     listComment:[]
            // };
            // setItemsTop(prevItems => [...prevItems, newItem]);
            // setItemsLast(prevItems => [...prevItems, newItem]);
            // getData();

            const fetchData = async () => {  
                setIsLoading(true);
                await postData(`${process.env.NEXT_PUBLIC_PROFILE_URL}/v1/profile/post`,{
                    id:getRandomInt(99999).toString(),
                    profile_id: Props.coinID,
                    userName: userEmail,
                    postTime: new Date().toString(),
                    content: content,
                }).then
                ((data) => {
                    console.log(data)
                    getData();
                })
            }
            fetchData();
        }
        else
        {
            // const newItems = itemsTop.map(item => {
            //     if (item.id === curPost) {
            //         return {
            //             ...item,
            //             listComment: [
            //                 ...item.listComment,
            //                 {
            //                     idComment: getRandomInt(99999).toString(),
            //                     userAvatar: "https://placehold.co/40x40",
            //                     userName: userEmail,
            //                     mainComment: content
            //                 }
            //             ]
            //         };
            //     }
            //     return item;
            // });
            // setItemsTop(newItems);

            const fetchData = async () => {  
                setIsLoading(true);
                await postData(`${process.env.NEXT_PUBLIC_PROFILE_URL}/v1/profile/add_comment`,{
                    idPost: curPost,
                    profile_id: Props.coinID,
                    commentUserName: userEmail,
                    mainComment: content,
                    idComment: getRandomInt(99999).toString(),
                }).then
                ((data) => {
                    console.log(data)
                    getData();
                })
            }
            fetchData();
        }
        setContent("");
        setCurPost("");
        
    }

    function setBull(id:any){
        const fetchData = async () => {  
            setIsLoading(true);
            await postData(`${process.env.NEXT_PUBLIC_PROFILE_URL}/v1/profile/bull_id`,{
                id:id,
                profile_id:Props.coinID,
                userName: userEmail,
            }).then
            ((data) => {
                console.log(data);
                getData();
            })
        }
        fetchData();
    }

    function setBear(id:any){
        const fetchData = async () => {  
            setIsLoading(true);
            await postData(`${process.env.NEXT_PUBLIC_PROFILE_URL}/v1/profile/bear_id`,{
                id:id,
                profile_id:Props.coinID,
                userName: userEmail,
            }).then
            ((data) => {
                console.log(data);
                getData();
            })
        }
        fetchData();
    }

    function setComment(id:any){
        setCurPost(id)
    }

    function setShare(id:any){
        const fetchData = async () => {  
            setIsLoading(true);
            await postData(`${process.env.NEXT_PUBLIC_PROFILE_URL}/v1/profile/share_profile`,{
                id:id,
                profile_id:Props.coinID,
                userName: userEmail,
            }).then
            ((data) => {
                 console.log(data);
                 getData();
            })
        }
        fetchData();
    }

    useEffect(() => {
        // This will run whenever the data prop changes
        // You can update your component's state here if needed
        console.log(dataTopPost)
    }, [dataTopPost]);

    return (
    <div>
        {/* <div className="p-4 border-b flex justify-between items-center">
            <div className="flex gap-5">
                <Avatar isBordered radius="full" size="md" src="https://th.bing.com/th/id/R.d7aee691faadd1ebbbea18147c248042?rik=YiWu%2fNx0ygvlJw&pid=ImgRaw&r=0" />
                <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">{Props.coinID.toUpperCase()}</h4>
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
        </div> */}
        {/* <div className="flex-grow overflow-auto p-4">
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
                        {
                            isLoading ? (
                                <div className="flex justify-between items-center">Loading...</div>
                            ) : (item.id == "top" ? 
                                <CommentCoinMarketCap data={dataTopPost} setBull={setBull} setBear={setBear} setComment={setComment} setShare={setShare} />   
                                : <CommentCoinMarketCap data={dataTopPost} setBull={setBull} setBear={setBear} setComment={setComment} setShare={setShare} /> )
                        }
                    </ScrollShadow>
                </Tab>
                )}
            </Tabs>
        </div> */}
        <div className="p-4 border-b flex justify-between items-center bg-leofi text-lime-50">
            Comment
        </div>
        <div className="flex-grow overflow-auto p-4 border">
            {
                 isLoading ? (
                    <div className="flex justify-between items-center">Loading...</div>
                ) : 
                <ScrollShadow className="h-[450px] scrollbar-hide">
                    <CommentCoinMarketCap data={dataTopPost} setBull={setBull} setBear={setBear} setComment={setComment} setShare={setShare} /> 
                </ScrollShadow>
               
            }
           
        </div>
        <div className="p-4 border-t flex items-center">
            <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full mr-2" />
            <input type="text" 
                placeholder="What are you thinking..." 
                className="flex-grow w-full bg-input text-foreground p-2 rounded-lg mr-2"
                onChange={(event) => setContent(event.target.value)} />
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded" onClick={() => newPost()}>{curPost == ""? "Post":"Comment"}</button>
        </div>
    </div>
    )
}