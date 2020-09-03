import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ResourceContext, { nullResource } from '../../contexts/ResourceContext'
import ResourceApiService from '../../services/resource-api-service'
import { NiceDate, Hyph, Section } from '../../components/Utils/Utils'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import './ResourcePage.css'

export default class ResourcePage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ResourceContext

  componentDidMount() {
    const { resourceId } = this.props.match.params
    this.context.clearError()
    ResourceApiService.getResource(resourceId)
      .then(this.context.setResource)
      .catch(this.context.setError)
    ResourceApiService.getResourceReviews(resourceId)
      .then(this.context.setReviews)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearResource()
  }

  renderResource() {
    const { resource, reviews } = this.context
    return <>
      <h2>{resource.name}</h2>
      <p>
        <NiceDate date={resource.date_created} />
      </p>
      <ResourceContent resource={resource} />
      <ResourceReviews reviews={reviews} />
      <ReviewForm />
    </>
  }

  render() {
    const { error, resource } = this.context
    let content
    if (error) {
      content = (error.error === `Resource doesn't exist`)
        ? <p className='red'>Resource not found</p>
        : <p className='red'>There was an error</p>
    } else if (!resource.id) {
      content = <div className='loading' />
    } else {
      content = this.renderResource()
    }
    return (
      <Section className='ResourcePage'>
        {content}
      </Section>
    )
  }
}


function ResourceContent({ resource }) {
  return (
    <p className='ResourcePage__content'>
      {resource.content}
    </p>
  )
}

function ResourceReviews({ reviews = [] }) {
  return (
    <ul className='ResourcePage__review-list'>
      {reviews.map(review =>
        <li key={review.id} className='ResourcePage__review'>
          <p className='ResourcePage__review-text'>
            <FontAwesomeIcon
              size='lg'
              icon='quote-left'
              className='ResourcePage__review-icon blue'
            />
            {review.text}
          </p>
          <p className='ReviewPage__review-user'>
            {review.user.username}
          </p>
        </li>
      )}
    </ul>
  )
}