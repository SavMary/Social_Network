
let store={
     state:{
        profilePages:{
            postsData:[
                {id: 1, message :"Hello!", likesCount:15},
                {id: 2, message:"Good afternoon", likesCount:9},
                {id: 3, message:"The weather is good", likesCount:57},
                {id: 4, message:"I like snow", likesCount:100}
              ]
        },
        dialogsPages:{
            dialogsData:[
                {id:1, name:'Maryna'}, 
                {id:2, name:'Sasha'},
                {id:3, name:'Dima'},
                {id:4, name:'Natalia'},
                {id:5, name:'Lena'},
              ],
               messageData:[
                {id:1, message:"Hello!"},
                {id:2, message:"How are you?"},
                {id:3, message:"When will i see you?"},
                {id:4, message:"I miss you"},
                {id:5, message:"Yo!"},
              ]
        },
        sidebar:{
            sidebarData:[
                {id:1, name:'Maryna', image: <a href=""><img src="https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380" alt="ava" /></a>}, 
                {id:2, name:'Sasha', image: <a href=""><img src="https://www.unn.com.ua/uploads/news/2021/10/15/f14454db1390e1ea4ae0c141daf6d5074b21a18a.jpg" alt="ava" /></a>},
                {id:3, name:'Dima', image: <a href=""><img src="https://resizer.mail.ru/p/80f99e9e-680d-598a-9082-246fe9ecb98a/AAAC8W10xLGAstZSDlunrng4zjyUNEtcbob2XUlBn3fs8PUzR2Sm3j0pChWWCb9wOgDqzWtz2n3sq4gQPoMHcmOcaDY.jpg" alt="ava" /></a>},
            ]
        }
    },
    getstate(){
        return this.state
    },
    callSubscriber (){
        console.log('state changed')
        },
    addPost (text){
        let newPost  ={
            id:5,
            message: text,
            likesCount: 0
        }
        this.state.profilePages.postsData.push(newPost);
        this.callSubscriber(this.state);
    },
    addMessage(text){
        let newMessage={
            id:6,
            message: text
        }
        this.state.dialogsPages.messageData.push(newMessage);
        this.callSubscriber(this.state);
    },
    subscribe (observer){
        this.callSubscriber=observer;
    },
    dispatch(action){
        if(action.type==='ADD-POST'){
            let newPost  ={
                id:5,
                message: action.text,
                likesCount: 0
            }
            this.state.profilePages.postsData.push(newPost);
            this.callSubscriber();
        }else if(action.type==='ADD-MESSAGE'){
            let newMessage={
                id:6,
                message: action.text
            }
            this.state.dialogsPages.messageData.push(newMessage);
            this.callSubscriber();
        }
    }
}
export const addPostActionCreator=(text)=>{
    return{
        type: 'ADD-POST', 
        text: text
    }
}

    



export default store;