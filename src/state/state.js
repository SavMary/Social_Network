import profileReducer from './profileReducer';
import dialogsReducer from './dilogsReducer';
import sidebarReducer from './sidebarReducer';
const ADD_POST = 'ADD-POST',
    ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_TEXT_MESSAGE_CREATOR = 'UPDATE-TEXT-MESSAGE-CREATOR';
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
              ],
              newMessageBody:""
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
    subscribe (observer){
        this.callSubscriber=observer;
    },
    dispatch(action){
        this.state.profilePages= profileReducer(this.state.profilePages, action)
        this.state.dialogsPages= dialogsReducer(this.state.dialogsPages, action)
        this.state.sidebar= sidebarReducer(this.state.sidebar, action)
            this.callSubscriber(this.state);
        }
    }

export default store;