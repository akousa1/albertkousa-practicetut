import api from './api/posts';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import { format } from 'date-fns';
import Nav from './components/Nav';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  const [posts, setPosts] = useState([]);
  const [Search, setSearch] = useState('');
  const [SearchResults, setSearchResults] = useState([]);
  const [postTitle, setpostTitle] = useState('');
  const [PostBody, setPostBody] = useState('');
  const [EditTitle, setEditTitle] = useState('');
  const [EditBody, setEditBody] = useState('');
  const history = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter((post) => (
      (post.body).toLowerCase()).includes(Search.toLowerCase())
      || ((post.title).toLowerCase()).includes(Search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, Search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: PostBody };
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setpostTitle('');
      setPostBody('');
      history('/');
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: EditTitle, datetime, body: EditBody };
    try {
      const response = await api.put(`./posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
      setEditTitle('');
      setEditBody('');
      history('/')
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`./posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList)
      history('/')
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={Search} setSearch={setSearch} />
      <Routes>
      <Route exact path="/"
       element={<Home posts={SearchResults}/>}/>
        <Route exact path='/post' element={
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setpostTitle}
            postBody={PostBody}
            setPostBody={setPostBody}
          />
        }>

        </Route>
        <Route exact path='/edit/:id' element={
          <EditPost
            posts={posts}
            handleEdit={handleEdit}
            editTitle={EditTitle}
            setEditTitle={setEditTitle}
            editBody={EditBody}
            setEditBody={EditBody}
          />
        }
        />
        <Route path='/post/:id' element ={
          <PostPage 
            posts={posts}
            handleDelete={handleDelete}
          />
        }/>
        <Route path='about' element={
          <About/>
        } />
        <Route path="*" element={
          <Missing />
        }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
