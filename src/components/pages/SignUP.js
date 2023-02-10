import React from 'react'
import '../../App.css';
import Dashboard from '../Dashboard';
import SearchBar from './SearchBar';

const collegeSubjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "History",
    "English Literature",
    "Economics",
    "Political Science",
    "Philosophy",
    "Sociology",
    "Psychology"
  ];

export default function SignUp() {
    return <div>
        {/* <SearchBar names={collegeSubjects}>

        </SearchBar> */}

        <Dashboard></Dashboard>
    </div>
}
