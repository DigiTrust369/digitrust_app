const CommentIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><defs><mask id="ipSComment0"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M44 6H4v30h9v5l10-5h21z"/><path stroke="#000" d="M14 19.5v3m10-3v3m10-3v3"/></g></mask></defs><path fill={props.comment == 1? "#3251ec":"#989090"} d="M0 0h48v48H0z" mask="url(#ipSComment0)"/></svg>
);

export default CommentIcon;
