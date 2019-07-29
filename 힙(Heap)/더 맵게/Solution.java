import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

class Solution {
    public int solution(int[] scoville, int K) {
        List<Integer> list = new ArrayList<Integer>();
        for (int num:scoville) list.add(num);
        Collections.sort(list);
        int sum = 0, cnt = 0;
        while (sum < K && list.size() > 1) {
            cnt++;
            sum = list.get(0) + (list.get(1) * 2);
            list.add(sum);
            list.remove(0);
            list.remove(0);
            for (int i = list.size() - 1; i > 0; i--) {
                if (list.get(i) < list.get(i - 1)) {
                    int tmp = list.get(i);
                    list.set(i, list.get(i - 1));
                    list.set(i - 1, tmp);
                } else break;
            }
        }
        if (sum < K) cnt = -1;
        return cnt;
    }
}