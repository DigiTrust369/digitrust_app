import React from 'react';

import Avatar from '@atlaskit/avatar';
import Comment, { CommentAction, CommentAuthor, CommentTime, CommentLayout } from '@atlaskit/comment';
import digitrustNoTextLogo from "@/assets/images/digitrust_notext.png";
import Image from 'next/image';
import { TelegramShareButton, TelegramIcon } from "react-share";
import CommentBox from './CommentBox';

export default function CommentSection() {
    return (
        <CommentLayout
            content={
                <>
                    <div>
                        <Image width={48} src={digitrustNoTextLogo} alt='logo' />
                        <h1>A NEW VAULT</h1>
                        <CommentAction>Comment</CommentAction>
                        <TelegramShareButton url="Digitrust" title='Join with us'><CommentAction>Share</CommentAction></TelegramShareButton>
                    </div>
                    <CommentBox />
                </>
            }
        >
            <Comment
                avatar={<Avatar name="Scott Farquhar" />}
                author={<CommentAuthor>Scott Farquhar</CommentAuthor>}
                type="author"
                time={<CommentTime>Jun 3, 2022</CommentTime>}
                content={
                    <p>
                        Hard to believe it’s been 20 years since we started Atlassian, but we’re just getting
                        started!
                    </p>
                }
                actions={[
                    <CommentAction>Reply</CommentAction>,
                    <CommentAction>Like</CommentAction>,
                ]}

            >
                <Comment
                    avatar={<Avatar name="John Smith" />}
                    author={<CommentAuthor>John Smith</CommentAuthor>}
                    time={<CommentTime>Jun 3, 2022</CommentTime>}
                    content={<p>Congratulations!</p>}
                    actions={[<CommentAction>Reply</CommentAction>, <CommentAction>Like</CommentAction>]}
                >
                    <Comment
                        avatar={<Avatar name="Sabina Vu" />}
                        author={<CommentAuthor>Sabina Vu</CommentAuthor>}
                        time={<CommentTime>Jun 4, 2022</CommentTime>}
                        content={<p>I wonder what Atlassian will be like 20 years from now?</p>}
                        actions={[<CommentAction>Reply</CommentAction>, <CommentAction>Like</CommentAction>]}
                    />
                </Comment>
            </Comment>
            <Comment
                avatar={<Avatar name="Scott Farquhar" />}
                author={<CommentAuthor>Scott Farquhar</CommentAuthor>}
                type="author"
                time={<CommentTime>Jun 3, 2022</CommentTime>}
                content={
                    <p>
                        Hard to believe it’s been 20 years since we started Atlassian, but we’re just getting
                        started!
                    </p>
                }
                actions={[
                    <CommentAction>Reply</CommentAction>,
                    <CommentAction>Like</CommentAction>,
                ]}

            >
                <Comment
                    avatar={<Avatar name="John Smith" />}
                    author={<CommentAuthor>John Smith</CommentAuthor>}
                    time={<CommentTime>Jun 3, 2022</CommentTime>}
                    content={<p>Congratulations!</p>}
                    actions={[<CommentAction>Reply</CommentAction>, <CommentAction>Like</CommentAction>]}
                >
                    <Comment
                        avatar={<Avatar name="Sabina Vu" />}
                        author={<CommentAuthor>Sabina Vu</CommentAuthor>}
                        time={<CommentTime>Jun 4, 2022</CommentTime>}
                        content={<p>I wonder what Atlassian will be like 20 years from now?</p>}
                        actions={[<CommentAction>Reply</CommentAction>, <CommentAction>Like</CommentAction>]}
                    />
                </Comment>
            </Comment>
        </CommentLayout>
    );
}