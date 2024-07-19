import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";




export default function Comment() {
    let tabs = [
        {
          id: "top",
          label: "top",
          content: "#Bitcoin will go to $70,000"
        },
        {
          id: "latest",
          label: "latest",
          content: "#Bitcoin will break $50,000"
        }
      ];
    return (
        <div>
            <div className="bg-card p-4 rounded-lg mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img src="https://placehold.co/40x40" alt="Bitcoin Logo" className="rounded-full" />
                    <div>
                        <p className="text-lg font-semibold">Bitcoin</p>
                        <p className="text-muted-foreground">1.6M Followers</p>
                    </div>
                </div>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded">Follow</button>
            </div>

            {/* <div className="flex space-x-2 mb-4">
                <button className="bg-input text-foreground px-4 py-2 rounded">Top</button>
                <button className="bg-input text-foreground px-4 py-2 rounded">Latest</button>
            </div> */}

            <Tabs aria-label="Dynamic tabs" items={tabs}>
                {(item) => (
                <Tab key={item.id} title={item.label}>
                    <Card>
                        <CardBody>
                            <div className="bg-card p-4 rounded-lg mb-4">
                                <div className="flex items-center space-x-2 mb-2">
                                    <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full" />
                                    <div>
                                        <p className="font-semibold">@laucrypto</p>
                                        <p className="text-muted-foreground text-sm">6h</p>
                                    </div>
                                </div>
                                <p className="mb-2">
                                    <span className="text-primary">#BTC</span> <br />
                                    <span className="text-muted-foreground">#{item.content}</span> <br />
                                    <span className="text-primary">#ETF #ETFs #BTC</span>
                                </p>
                                <img src="https://placehold.co/300x150" alt="Post Image" className="w-full h-auto rounded-lg mb-2" />
                                <a href="#" className="text-primary">Read all...</a>
                            </div>


                            <div className="flex items-center space-x-4 mb-4">
                                <div className="flex items-center space-x-1">
                                    <img alt="like-icon" src="https://openui.fly.dev/openui/24x24.svg?text=👍" />
                                    <span>73</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <img alt="heart-icon" src="https://openui.fly.dev/openui/24x24.svg?text=❤️" />
                                    <span>441</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <img alt="comment-icon" src="https://openui.fly.dev/openui/24x24.svg?text=💬" />
                                    <span>14</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <img alt="share-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🔗" />
                                    <span>8</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <img alt="save-icon" src="https://openui.fly.dev/openui/24x24.svg?text=💾" />
                                    <span>7</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <img alt="views-icon" src="https://openui.fly.dev/openui/24x24.svg?text=👁️" />
                                    <span>283.5K</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img alt="comments-icon" src="https://openui.fly.dev/openui/24x24.svg?text=💬" />
                                    <span>19</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img alt="retweets-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🔁" />
                                    <span>0</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img alt="likes-icon" src="https://openui.fly.dev/openui/24x24.svg?text=❤️" />
                                    <span>545</span>
                                </div>
                            </div>
                        </CardBody>
                    </Card>  
                </Tab>
                )}
            </Tabs>
            <div className="flex items-center mt-4">
                <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full mr-2" />
                <input type="text" placeholder="Post your comment..." className="bg-input text-foreground p-2 rounded-lg flex-1 mr-2" />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded">Post</button>
            </div>
        </div>
    )
}