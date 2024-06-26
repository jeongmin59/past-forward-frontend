import { http, RequestHandler, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';

//Retro
const RETRO_ROUTE = 'retrospectives';
export const RetrospectiveHandlers: RequestHandler[] = [
  http.get(`/${RETRO_ROUTE}/1`, () => {
    return HttpResponse.json();
  }),
  http.post(`/${RETRO_ROUTE}`, () => {
    const mock = {
      code: 0,
      message: 'string',
      data: {
        id: 0,
        title: 'heejung',
        teamId: 0,
        userId: 0,
        templateId: 0,
        status: 'NOT_STARTED',
        thumbnail: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        startDate: '2024-04-11T16:28:15.042Z',
        description: 'heejung',
      },
    };
    return HttpResponse.json(mock);
  }),
  http.get(`${RETRO_ROUTE}?retrospectiveId=1&teamId=1`, () => {
    return HttpResponse.json();
  }),
  http.delete(`${RETRO_ROUTE}/0`, () => {
    return;
  }),
  http.put(`${RETRO_ROUTE}/1`, () => {
    return HttpResponse.json();
  }),

  http.get('/retrospectivesTemplate', () => {
    return HttpResponse.json();
  }),
];

//section
const SECTION_ROUTE = 'sections';
export const SectionHandlers: RequestHandler[] = [
  http.get(`${SECTION_ROUTE}/`, () => {
    return HttpResponse.json();
  }),
  http.post(`${SECTION_ROUTE}/`, () => {
    return HttpResponse.json();
  }),
  http.patch(`${SECTION_ROUTE}/1`, () => {
    return HttpResponse.json();
  }),
  http.delete(`${SECTION_ROUTE}/1`, () => {
    return HttpResponse.json();
  }),
  http.post(`${SECTION_ROUTE}/0/likes`, () => {
    const mockLikes = {
      sectionId: 0,
      likeCnt: 2,
    };
    return HttpResponse.json(mockLikes);
  }),
  http.put(`${SECTION_ROUTE}/action-items`, () => {
    const mockActionItems = {
      code: 0,
      message: 'string',
      data: {},
    };
    return HttpResponse.json(mockActionItems);
  }),
];

//teamMembers
const TEAMS_ROUTE = 'teams';
export const TeamHandlers: RequestHandler[] = [
  http.get(`${TEAMS_ROUTE}/1/users`, () => {
    const mockMembers = {
      code: 0,
      message: '22',
      data: {
        userId: 1,
        username: 'hope',
        profileImage: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      },
    };
    return HttpResponse.json(mockMembers);
  }),
];
export const mswWorker = setupWorker();
