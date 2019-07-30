class Solution {
    public int solution(int[] scoville, int K) {
        int[] s = new int[scoville.length];
        int last = 0, count = 0;
        for (int v : scoville) insert(s, v, last++);
        if (s.length <= 1) return -1;
        while (s.length > 1 && s[0] < K) {
            if (s[0] == -1 || s[1] == -1) return -1;
            int min = s[1];
            if (s.length > 2 && s[2] != -1 && min > s[2]) min = s[2];
            int v = s[0] + (min * 2);
            delete(s, --last);
            delete(s, --last);
            insert(s, v, last++);
            count += 1;
        }
        return count;
    }
    
    static public void insert (int[] s, int v, int last) {
        int i = last;
        while ((i > 0) && (v < s[i/2])) {
            s[i] = s[i/2];
            i /= 2;
        }
        s[i] = v;
    }
         
    static public void delete (int[] s, int last) {
        int i = 0;
        s[i] = s[last];
        while (i <= last) {
            int v = s[i];
            int next = i * 2;
            if (next >= last) break;
            if (s[next] > s[next + 1]) next += 1;
            if (v > s[next]) {
                s[i] = s[next];
                s[next] = v;
                i = next;
            } else {
                break;
            }
        }
        s[last] = -1;
    }
}