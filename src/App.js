import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  apiKey =process.env.REACT_APP_NEWS_API

  state ={
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress:progress})
  }

  render(){
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
      <Navbar/>
        <News setProgress={this.setProgress} key ="general"  country="in" apiKey={this.apiKey} category="general" />
      </>
    },
    {
      path: '/entertainment',
      element: <>
      <Navbar/>
        <News setProgress={this.setProgress} key ="entertainment"  country="in" apiKey={this.apiKey} category="entertainment" />
      </>
    },
    {
      path: '/health',
      element: <>
      <Navbar/>
        <News setProgress={this.setProgress} key ="health"  country="in" apiKey={this.apiKey} category="health" />
      </>
    },
    {
      path: '/sports',
      element: <>
      <Navbar/>
        <News setProgress={this.setProgress} key ="sports"  country="in" apiKey={this.apiKey} category="sports" />
      </>
    },
    {
      path: '/technology',
      element: <>
      <Navbar/>
        <News setProgress={this.setProgress}  key ="technology" country="in" apiKey={this.apiKey} category="technology" />
      </>
    }
  ]);

    return (
      <>
      <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
      />
      <RouterProvider router={router} />
      </>
    );
  }
}

export default App;
