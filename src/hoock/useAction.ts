import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

import { globalSliceActions } from '../store/global/globalSlice';
import { getData } from '../store/get-data/get-data-slice';

function useAction() {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators({ ...globalSliceActions, getData }, dispatch),
    [dispatch]
  );
}

export default useAction;
