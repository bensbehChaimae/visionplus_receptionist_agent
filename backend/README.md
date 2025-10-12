# Vision+ Clinic Medical Receptionist - Architecture Documentation

## Overview

This n8n workflow implements an AI-powered medical receptionist system that handles patient interactions, appointment scheduling, and calendar management through webhook-based communication. The system uses OpenAI's chat model to understand and respond to patient requests naturally.


![Backend architecture](./backend_n8n_architecture.png)

## System Architecture

### Core Components

#### 1. **Webhook Entry Point**
- Receives incoming requests from patients or external systems
- Triggers the AI receptionist workflow
- Acts as the primary interface for all patient interactions

#### 2. **AI Medical Receptionist (Central Hub)**
- Powered by OpenAI Chat Model
- Processes natural language requests from patients
- Determines appropriate actions based on conversation context
- Coordinates with various backend services
- Generates natural language responses

#### 3. **Response to Webhook**
- Returns AI-generated responses to the caller
- Completes the request-response cycle

### Supporting Services

#### Memory System
- **Postgres Chat Memory**: Maintains conversation history and context
- Enables the AI to remember previous interactions within a session
- Provides continuity across multiple exchanges

#### Calendar Management (Yellow Section)
- **Calendar Create**: Creates new calendar events for appointments
- **Calendar Get**: Retrieves existing calendar events and availability
- Both services integrate with calendar systems to manage scheduling

#### Appointments Management (Blue Section)
- **Appointment Search** (`getAll: flow`): Finds existing appointments based on criteria
- **Appointment Create** (`create: row`): Books new appointments in the system
- **Appointment Reschedule** (`update: row`): Modifies existing appointment times
- **Appointment Delete** (`delete: row`): Cancels appointments

#### Patient Records Management (Pink Section)
- **Patient Search** (`getAll: row`): Looks up existing patient information
- **Patient Add** (`create: row`): Registers new patients in the system

## Workflow Process

1. **Patient Request** → Webhook receives the request
2. **AI Processing** → OpenAI model analyzes the request and determines intent
3. **Action Execution** → Based on AI decision, the system:
   - Searches/creates/updates appointments
   - Manages calendar events
   - Retrieves/adds patient records
4. **Memory Update** → Conversation context is stored in Postgres
5. **Response Generation** → AI formulates a natural language response
6. **Response Delivery** → Webhook returns the response to the patient

## Key Features

- **Natural Language Understanding**: Patients can communicate in plain language
- **Multi-Function Capability**: Handles scheduling, rescheduling, cancellations, and patient registration
- **Context Awareness**: Maintains conversation history for coherent interactions
- **Calendar Integration**: Syncs with calendar systems for real-time availability
- **Database Integration**: Direct access to appointment and patient databases

## Use Cases

- Booking new appointments
- Rescheduling existing appointments
- Canceling appointments
- Checking appointment availability
- Registering new patients
- Retrieving patient information
- Answering appointment-related queries

## Technical Stack

- **Workflow Engine**: n8n
- **AI Model**: OpenAI Chat Model
- **Database**: PostgreSQL (for chat memory)
- **Integration**: Calendar system (Google Calendar, Outlook, etc.)
- **API**: Webhook-based REST interface

## Benefits

- **24/7 Availability**: Handles requests anytime without human intervention
- **Scalability**: Can manage multiple concurrent conversations
- **Consistency**: Provides standardized responses and procedures
- **Efficiency**: Reduces administrative workload on medical staff
- **User-Friendly**: Natural language interface requires no special training










