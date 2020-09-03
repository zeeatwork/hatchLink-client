import React, { Component } from 'react'
import ResourceContext from '../../contexts/ResourceContext'
import ResourceApiService from '../../services/resource-api-service'
import { Button, Textarea } from '../Utils/Utils'

export default class ReviewForm extends Component {
  static contextType = ResourceContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { resource } = this.context
    const { comment } = ev.target
    ResourceApiService.postReview(resource.id, comment.value)
      .then(this.context.addReview)
      .then(() => {
        comment.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='ReviewForm'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
          <Textarea
            required
            aria-label='Type a comment...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a comment..'>
          </Textarea>
        </div>
        <Button type='submit'>
          Post comment
        </Button>
      </form>
    )
  }
}
