import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components'
import {  Route, BrowserRouter, Routes } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './hooks';

const Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

function App() {
  const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

  return (
    <div className="App">
      <Backdrop>
        {/* <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Routes>
            </Routes>
          </React.Suspense>
        </BrowserRouter> */}
      </Backdrop>
    </div>
  );
}

export default App;
