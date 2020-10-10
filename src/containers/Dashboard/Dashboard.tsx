import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { AppDispatch, AppState } from '../../store';
import {
  getCurrentPage,
  getFilterParams,
  getReviewError,
  getReviewTableItems,
  isLoadingReviews,
} from '../../store/review/selectors';
import { getCurrentReviews, updateFilterPage } from '../../store/review/thunks';
import Table from '../../components/Table/Table';

const HEADERS = ['Created at', 'Comment'];

const mapStateToProps = (state: AppState) => ({
  filter: getFilterParams(state),
  currentPage: getCurrentPage(state),
  listError: getReviewError(state),
  isLoadingReviews: isLoadingReviews(state),
  reviewItems: getReviewTableItems(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators({ getCurrentReviews, updateFilterPage }, dispatch);

type FeedPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Dashboard: React.FC<FeedPageProps> = ({
  getCurrentReviews,
  filter,
  updateFilterPage,
  isLoadingReviews,
  listError,
  reviewItems,
}) => {
  useEffect(() => {
    getCurrentReviews();
  }, []);

  // const handlePageChange = (page?: number) => {
  //   updateFilterPage(page);
  // };

  return (
    <Grid data-test-id="dashboardPage">
      <Grid.Column width={12}>
        <Table headers={HEADERS} items={reviewItems} isLoading={isLoadingReviews} error={listError} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
