import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import User from './User'
export class Form extends Component {
    state={
        name:'',
        title:'',
        body:'',
        posts: []
    }

    componentDidMount() {
        this.getPost()
    }

    getPost = () => {
        axios.get('/api')
        .then(res => {
            const data = res.data
            this.setState({posts: data})
            console.log('Received by server', res)
        })
        .catch(err => console.log(err))
    }

    changeHandler =  ({target}) => {
        this.setState({[target.name]: target.value})
    }

    submitHandler = (e) =>{
        e.preventDefault()

        const payload = {
            name : this.state.name,
            title : this.state.title,
            body : this.state.body
        }

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
            .then(() =>{
             console.log('Data sent to server', payload)
             this.getPost()
        })

            .catch(err => {  console.log(err)})
    }

  resetInputs = () => {
      this.setState({
        name:'',
        title:'',
        body:''
      })
  }
    render() {
        const {name, title,posts, body}= this.state
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <form onSubmit={this.submitHandler} >
                    <div className="form-group ">
                        <label className='text-capitalize'>name</label>
                        <input className='form-control' type="text" value={name} name='name' onChange={this.changeHandler}/>
                    </div>         
                    <div className="form-group">
                    <label className='text-capitalize'>title</label>
                        <input className='form-control' type="text" value={title} name='title' onChange={this.changeHandler}/>
                    </div>
                    <div className="form-group">
                    <label className='text-capitalize'>body</label>
                        <textarea className='form-control' name="body" value={body} onChange={this.changeHandler}></textarea>
                    </div>
                    <button type='submit' className="btn btn-primary btn-block my-3">Submit</button>
                </form>
                </div>
                <div className='col-md-6'>
                    <User posts={posts}/>
                </div>
                </div>
            </div>
        )
    }
}

export default Form
