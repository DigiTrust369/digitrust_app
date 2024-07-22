import React from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

const DefaultComponent = () => {
    const data = [
        {
            userId: '02b',
            comId: '017',
            fullName: 'Lily',
            userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, maxime fugit et, nesciunt eveniet enim nobis ea repellat vel tempore eligendi, iste deserunt mollitia accusantium molestias vitae nisi voluptates! Quaerat.",
            avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
            replies: []
        }
    ]
    return <CommentSection
        currentUser={{
            currentUserId: '01a',
            currentUserImg:
                'https://ui-avatars.com/api/name=Riya&background=random',
            currentUserProfile:
                'https://www.linkedin.com/in/riya-negi-8879631a9/',
            currentUserFullName: 'Riya Negi'
        }}
        logIn={{
            loginLink: 'http://localhost:3001/',
            signupLink: 'http://localhost:3001/'
        }}
        commentData={data}
        onSubmitAction={(data: {
            userId: string
            comId: string
            avatarUrl: string
            userProfile?: string
            fullName: string
            text: string
            replies: any
            commentId: string
        }) => console.log('check submit, ', data)}
        currentData={(data: any) => {
            console.log('curent data', data)
        }}
        removeEmoji={true}
        formStyle={{
            "display": "flex",
            "flex-wrap": "wrap",
            "background-color": "transparent",
        }}
        inputStyle={{
            "flex-grow": "2",
            "margin": "8px 0",
        }}
        submitBtnStyle={{
            "margin-left": "auto",
        }}
        replyInputStyle={{
            "flex-grow": "2",
            "margin": "8px 0",
        }}
        titleStyle={{
            "font-size": "16px",
        }}
    />
}

export default DefaultComponent;