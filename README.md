# TourScheduler
## Summary
*Tour Scheduler is a Management App that will help to Schedule an Event, with a limited room for other users.*

When they book to an event it will be charge the half of the price. they should be able to cancel 3 days before the event to have a full refund otherwise it will be charge the whole price.

## Problem to solve
Help a Tour Guide to manage his schedule and manage the audience payment for the tour.

## Technical Components
### Routes
 - Event
 - Event/Booking
   
### Data Models
***- Event***
  - EventId
  - Name
  - Description
  - Date and Time
  - Spot
  - Status:
    - Published
    - Canceled
    - Draft
      
***- Booking***
  - BookingId
  - UserId
  - EventId
  - Payment Status
  - Status
    - Active
    - Canceled
      
***- User***
  - UserId
  - Email
  - Status
  - Last Email
  - Role
    - Guide
    - Audience

## Plan Management
### Milestones
- CRUD for Events
- CRUD Join an Event (Booking)
- Authentication using Email
- Authenticatication using Facebook and Google
