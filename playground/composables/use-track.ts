export default function useTrack() {
  return useFetch('https://ecs17.tmqyt.com/new_dev_api/sino-archives/report/event/list', {
    method: 'get',
  })
}
