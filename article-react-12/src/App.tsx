import './App.css'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import PostList from './components/PostList'

function App() {
  return (
    <>
      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Posts list</h2>
          <PostList />
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col">
              <h2>Create post</h2>
              <CreatePost />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h2>Edit post</h2>
              <EditPost />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
