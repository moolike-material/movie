import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const moviesRef = db.collection('movies')

export const state = () => ({
  movies: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('movies', moviesRef)
  }),
  get:firestoreAction((context,id)=>{
    let movieGet = moviesRef.doc(id);
    return movieGet.get()
  }),
  getTags1:firestoreAction((context,tag)=>{
    return moviesRef.where('tag1','==',tag).get()
  }),
  getTags2:firestoreAction((context,tag)=>{
    return moviesRef.where('tag2','==',tag).get()
  }),
  getTags3:firestoreAction((context,tag)=>{
    return moviesRef.where('tag3','==',tag).get()
  }),
  getWord:firestoreAction((context)=>{
    return moviesRef.get()
  }),
  download:firestoreAction((context,mv_id)=>{
  const imageURL = `mp4/${mv_id}`
  console.log(imageURL+"でダウンロードします")
  return firebase.storage().ref().child(imageURL).getDownloadURL()
  }),
  downloadMov:firestoreAction((context,mv_id)=>{
  const imageMov = `mov/${mv_id}`
  console.log(imageMov+"でダウンロードします")
  return firebase.storage().ref().child(imageMov).getDownloadURL()
  }),
  getThumb:firestoreAction((context,mv_id)=>{
  const imageURL = `thumb/${mv_id}.jpg`
  return firebase.storage().ref().child(imageURL).getDownloadURL()
  }),
  getCategory:firestoreAction((context,category)=>{
    return moviesRef.where('category','==',category).get()
  }),
  getDetail:firestoreAction((context,mv_id)=>{
    return moviesRef.where('mv_id','==',mv_id).get()
  }),
  add: firestoreAction((context,data) => {
      moviesRef.add({
        name: data[0],
        desc:data[1],
        yt_id:data[2],
        mv_id:data[3],
        length:data[4],
        category:data[5],
        tag1:data[5],
        tag2:data[7],
        tag3:data[8],
        dl_count:0,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
  }),
  remove: firestoreAction((context, id) => {
    moviesRef.doc(id).delete()
  }),
  update: firestoreAction((context, movie) => {
    moviesRef.doc(movie[9]).update({
        name: movie[0],
        desc:movie[1],
        yt_id:movie[2],
        mv_id:movie[3],
        length:movie[4],
        category:movie[5],
        tag1:movie[5],
        tag2:movie[7],
        tag3:movie[8],
    })
  }),
  dlcount:firestoreAction((context, movie_array)=>{
    moviesRef.doc(movie_array[0]).update({
      dl_count:movie_array[1]
    })
  }),
  dlcountMvId:firestoreAction((context, movie_array)=>{
    moviesRef.where('mv_id','==',movie_array[0]).update({
      dl_count:movie_array[1]
    })
  })
}

export const getters = {
  //新着順序
    orderdMovies: state =>{
        return _.sortBy(state.movies,'created').reverse();
    },

  //ランキング順
  rankMovies:state=>{
    return _.sortBy(state.movies,'dl_count').reverse();
  }
}