window.TIL_ALGORITHMS = [
  {
    "id": "lc-2022",
    "title": "1차원 → 2차원 배열",
    "group": "array",
    "url": "https://leetcode.com/problems/convert-1d-array-into-2d-array/",
    "status": "수정 중",
    "problem": "순서를 유지해 m행 n열 배열을 만든다. 불가능하면 빈 배열을 반환한다.",
    "date": "2026-08-17",
    "summary": "1차원 배열의 순서를 유지하면서 행과 열의 위치를 직접 계산해 2차원 배열로 옮겼다.",
    "question": "처음에는 비어 있는 2차원 vector에 A[M]이나 A[M, N]처럼 바로 접근하려 했다. 2차원 배열의 크기를 언제 만들고, 행과 열을 어떤 문법으로 선택해야 하는지가 핵심이었다.",
    "attempt": "원소를 읽는 순서대로 num을 증가시키는 생각은 그대로 유지했다. 먼저 m × n 크기의 결과 배열을 만든 다음, 바깥 반복문을 행 M, 안쪽 반복문을 열 N으로 두고 A[M][N]에 original[num]을 넣었다.",
    "turning": "가장 먼저 고친 부분은 저장 공간이었다. vector<vector<int>> A(m, vector<int>(n))로 크기를 만든 뒤에야 A[M][N] 접근이 유효해진다. 또 원소 수가 m*n과 다를 때 {0}을 반환하면 빈 배열이 아니라 0 하나를 가진 배열이 되므로 {}를 반환해야 한다.",
    "learned": [
      "2차원 vector는 행의 수와 각 행의 열 수를 먼저 만들 수 있다.",
      "A[M][N]에서 첫 인덱스는 행, 두 번째 인덱스는 열이다.",
      "불가능한 경우의 반환 형태까지 문제 조건과 정확히 맞아야 한다."
    ],
    "code_title": "정리한 풀이",
    "solution_code": "class Solution {\npublic:\n    vector<vector<int>> construct2DArray(vector<int>& original, int m, int n) {\n        if (original.size() != m * n) return {};\n\n        vector<vector<int>> result(m, vector<int>(n));\n        int index = 0;\n\n        for (int row = 0; row < m; row++) {\n            for (int col = 0; col < n; col++) {\n                result[row][col] = original[index++];\n            }\n        }\n        return result;\n    }\n};"
  },
  {
    "id": "lc-566",
    "title": "행렬 재구성",
    "group": "array",
    "url": "https://leetcode.com/problems/reshape-the-matrix/",
    "status": "채점 미확인",
    "problem": "행 우선 순서를 유지하며 행렬 크기를 바꾼다.",
    "date": "2026-08-17",
    "summary": "행렬을 한 줄로 읽은 뒤 새로운 행과 열에 다시 배치하면서 1차원 인덱스와 2차원 좌표의 관계를 익혔다.",
    "question": "원래 행렬과 결과 행렬의 모양은 달라도 원소의 읽는 순서는 같아야 했다. 처음에는 중간 vector B에 모든 값을 담고 다시 결과 배열로 옮기는 방식을 선택했다.",
    "attempt": "X*Y와 r*c가 다르면 원래 행렬을 반환하고, 같으면 중첩 반복문 두 번으로 평탄화와 재배치를 수행했다. 이 과정에서 y < Y를 Y < y로 쓰거나 두 번째 반복에서 num을 증가시키지 않는 실수를 찾았다.",
    "turning": "중간 배열 없이도 같은 index를 사용할 수 있다. 원본의 열 수가 Y라면 index/Y가 원본 행, index%Y가 원본 열이 된다. 결과에서는 결과 열 수 c를 기준으로 index/c와 index%c를 쓴다. 당시 질문에서 숫자 3을 넣었던 자리는 고정값이 아니라 열의 개수여야 했다.",
    "learned": [
      "전체 원소 수가 같아야 reshape가 가능하다.",
      "1차원 인덱스 i는 [i/열 수][i%열 수]로 바꿀 수 있다.",
      "좌표 공식의 나누는 수는 배열마다 그 배열의 열 수다."
    ],
    "code_title": "좌표 변환으로 정리한 풀이",
    "solution_code": "class Solution {\npublic:\n    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {\n        int rows = mat.size();\n        int cols = mat[0].size();\n        if (rows * cols != r * c) return mat;\n\n        vector<vector<int>> result(r, vector<int>(c));\n        for (int index = 0; index < rows * cols; index++) {\n            result[index / c][index % c] = mat[index / cols][index % cols];\n        }\n        return result;\n    }\n};"
  },
  {
    "id": "lc-867",
    "title": "행렬 전치",
    "group": "array",
    "url": "https://leetcode.com/problems/transpose-matrix/",
    "status": "수정 중",
    "problem": "행과 열을 서로 바꾼다.",
    "date": "2026-08-17",
    "summary": "행과 열을 맞바꾸는 전치 연산을 통해 행 개수와 마지막 인덱스를 구분했다.",
    "question": "전치 결과에서는 원본의 행이 열이 되고 원본의 열이 행이 된다. 그래서 결과 크기를 Y × X로 만들고 result[col][row] = matrix[row][col]로 옮기려 했다.",
    "attempt": "좌표를 바꾸는 식은 맞았지만 열 수를 matrix[X].size()로 읽었다. X는 마지막 행 번호가 아니라 행의 개수이므로 matrix[X]는 배열 밖을 가리킨다.",
    "turning": "행의 개수는 matrix.size(), 열의 개수는 존재하는 한 행인 matrix[0].size()에서 구했다. 결과의 바깥 반복은 원본 열, 안쪽 반복은 원본 행을 순회한다.",
    "learned": [
      "size()는 개수이며 마지막 인덱스는 size()-1이다.",
      "전치 후 결과 크기는 cols × rows다.",
      "좌표를 바꿀 때 결과와 원본의 인덱스 순서를 함께 적으면 혼동이 줄어든다."
    ],
    "code_title": "오류를 고친 풀이",
    "solution_code": "class Solution {\npublic:\n    vector<vector<int>> transpose(vector<vector<int>>& matrix) {\n        int rows = matrix.size();\n        int cols = matrix[0].size();\n        vector<vector<int>> result(cols, vector<int>(rows));\n\n        for (int row = 0; row < rows; row++) {\n            for (int col = 0; col < cols; col++) {\n                result[col][row] = matrix[row][col];\n            }\n        }\n        return result;\n    }\n};"
  },
  {
    "id": "lc-59",
    "title": "나선형 행렬 II",
    "group": "array",
    "url": "https://leetcode.com/problems/spiral-matrix-ii/",
    "status": "결과 공유",
    "problem": "1부터 n²까지 시계 방향 나선으로 채운다.",
    "date": "2026-08-17",
    "summary": "위·아래·왼쪽·오른쪽 경계를 줄여 가며 나선형으로 행렬을 채웠다.",
    "question": "한 번의 중첩 반복문으로는 오른쪽, 아래, 왼쪽, 위로 방향이 계속 바뀌는 이동을 표현하기 어려웠다. 대신 아직 채우지 않은 사각형의 네 경계를 변수로 두었다.",
    "attempt": "ux와 dx를 위·아래 행, dy와 uy를 왼쪽·오른쪽 열로 사용했다. 위쪽 행을 오른쪽으로 채운 뒤 ux를 늘리고, 오른쪽 열을 아래로 채운 뒤 uy를 줄이는 식으로 한 겹씩 안쪽으로 이동했다.",
    "turning": "처음에는 n-uy, n-dx처럼 좌표를 다시 계산했지만 경계 변수 자체가 이미 접근할 좌표라는 점을 확인했다. 홀수 크기의 마지막 한 칸에서는 첫 번째 for가 값을 넣고, 뒤집힌 범위의 나머지 for는 조건에서 자연스럽게 종료된다.",
    "learned": [
      "방향 이동 문제는 현재 위치보다 유효한 경계를 관리하는 편이 단순할 수 있다.",
      "각 방향을 처리한 직후 해당 경계를 한 칸 줄인다.",
      "반복문의 시작·종료 조건을 작은 n으로 직접 추적하면 중복 접근을 확인할 수 있다."
    ],
    "code_title": "제출한 경계 축소 풀이",
    "solution_code": "class Solution {\npublic:\n    vector<vector<int>> generateMatrix(int n) {\n        vector<vector<int>> matrix(n, vector<int>(n));\n        int number = 1;\n        int top = 0, bottom = n - 1;\n        int left = 0, right = n - 1;\n\n        while (number <= n * n) {\n            for (int col = left; col <= right; col++) matrix[top][col] = number++;\n            top++;\n            for (int row = top; row <= bottom; row++) matrix[row][right] = number++;\n            right--;\n            for (int col = right; col >= left; col--) matrix[bottom][col] = number++;\n            bottom--;\n            for (int row = bottom; row >= top; row--) matrix[row][left] = number++;\n            left++;\n        }\n        return matrix;\n    }\n};"
  },
  {
    "id": "lc-48",
    "title": "이미지 90도 회전",
    "group": "array",
    "url": "https://leetcode.com/problems/rotate-image/",
    "status": "미완성",
    "problem": "입력 행렬을 직접 시계 방향으로 90도 회전한다.",
    "date": "2026-09-11",
    "summary": "90도 회전의 좌표 규칙과 제자리 수정에서 값이 덮이는 문제를 확인했다.",
    "question": "matrix[y][x]를 temp에 담아 옮기려 했지만 한 값을 쓴 순간 다른 위치의 원래 값이 사라진다. 별도 2차원 배열을 만들 수 없다는 조건 때문에 이동 순서가 필요했다.",
    "attempt": "중첩 반복문에서 모든 좌표를 읽으며 이동 규칙을 찾기 시작했다. 여기까지는 좌표를 순회하는 틀과 임시 변수만 만들었고 실제 교환은 완성하지 못했다.",
    "turning": "시계 방향 90도 회전은 전치한 다음 각 행을 뒤집는 두 단계로 나눌 수 있다. 이 방식은 같은 행렬 안에서 swap만 사용하므로 별도 2차원 배열 없이 처리할 수 있다. 이 코드는 당시 미완성 지점에서 이어서 정리한 다음 풀이 방향이다.",
    "learned": [
      "제자리 수정에서는 목적지에 쓰기 전에 원래 값이 필요한지 확인해야 한다.",
      "복잡한 좌표 이동을 전치와 뒤집기 같은 두 연산으로 분해할 수 있다.",
      "미완성 풀이와 이후 정리한 해결 방향을 구분해 기록한다."
    ],
    "code_title": "다음에 완성할 코드",
    "solution_code": "void rotate(vector<vector<int>>& matrix) {\n    int n = matrix.size();\n\n    for (int row = 0; row < n; row++) {\n        for (int col = row + 1; col < n; col++) {\n            swap(matrix[row][col], matrix[col][row]);\n        }\n    }\n\n    for (auto& row : matrix) {\n        reverse(row.begin(), row.end());\n    }\n}"
  },
  {
    "id": "lc-965",
    "title": "단일값 이진 트리",
    "group": "tree",
    "url": "https://leetcode.com/problems/univalued-binary-tree/",
    "status": "채점 미확인",
    "problem": "트리 모든 노드의 값이 같은지 확인한다.",
    "date": "2026-09-14",
    "summary": "한쪽 경로만 따라가던 순회를 재귀로 바꾸며 모든 서브트리를 확인하는 방법을 익혔다.",
    "question": "처음 코드는 왼쪽 끝까지 내려간 다음 일부 오른쪽 자식만 검사했다. 이 방식으로는 오른쪽 서브트리 안쪽의 노드를 빠뜨릴 수 있었다.",
    "attempt": "재귀 함수 tree가 자식 값을 반환하고 부모 값과 비교하도록 바꿨다. 불일치가 나오면 멤버 변수 A를 false로 바꾸고 이후 호출을 빠르게 종료하려 했다.",
    "turning": "모든 노드가 루트와 같은지를 묻는 문제이므로 비교 기준을 루트 값 하나로 고정하면 더 단순하다. 현재 노드가 없으면 성공, 값이 기준과 다르면 실패, 그 외에는 왼쪽과 오른쪽 결과를 모두 확인한다.",
    "learned": [
      "트리는 한 방향만 따라가면 다른 서브트리를 놓친다.",
      "재귀 함수의 반환값 자체로 실패를 부모까지 전달할 수 있다.",
      "공유 상태 A 없이도 &&의 단락 평가로 불필요한 탐색을 멈출 수 있다."
    ],
    "code_title": "재귀 반환값으로 정리한 풀이",
    "solution_code": "class Solution {\npublic:\n    bool check(TreeNode* node, int value) {\n        if (node == nullptr) return true;\n        if (node->val != value) return false;\n        return check(node->left, value) && check(node->right, value);\n    }\n\n    bool isUnivalTree(TreeNode* root) {\n        return check(root, root->val);\n    }\n};"
  },
  {
    "id": "lc-100",
    "title": "같은 트리 비교",
    "group": "tree",
    "url": "https://leetcode.com/problems/same-tree/",
    "status": "오답 · 수정 중",
    "problem": "두 트리의 구조와 대응 값이 같은지 확인한다.",
    "date": "2026-09-16",
    "summary": "두 트리의 재귀 결과를 부모에게 전달하지 않아 생긴 오답을 통해 반환값의 흐름을 정리했다.",
    "question": "한 번 false가 나오면 더 비교하지 않게 만들고 싶어서 bool A를 재귀 전체에서 공유하려 했다. 하지만 자식 Tree가 false를 반환해도 그 값을 받지 않았고 함수 끝의 true가 결과를 덮었다.",
    "attempt": "A를 값이 아닌 bool&로 바꾸고 자식 구조가 다른 경우를 먼저 검사했다. 그래도 isSameTree에서 A = Tree(...)를 수행하면 마지막 return true가 공유된 false를 다시 true로 바꿀 수 있었다.",
    "turning": "공유 변수 없이 각 호출이 자신의 비교 결과를 바로 반환하도록 정리했다. 둘 다 nullptr이면 같은 구조, 한쪽만 nullptr이면 다른 구조다. 둘 다 존재할 때 현재 값과 두 자식 비교가 모두 참이어야 한다.",
    "learned": [
      "재귀 호출의 반환값을 무시하면 깊은 곳의 실패가 부모에게 전달되지 않는다.",
      "nullptr를 역참조하기 전에 두 포인터의 상태를 먼저 나눠야 한다.",
      "false를 만나면 &&의 단락 평가로 나머지 비교가 자동으로 멈춘다."
    ],
    "code_title": "오답 원인을 반영한 풀이",
    "solution_code": "class Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        if (p == nullptr && q == nullptr) return true;\n        if (p == nullptr || q == nullptr) return false;\n\n        return p->val == q->val\n            && isSameTree(p->left, q->left)\n            && isSameTree(p->right, q->right);\n    }\n};"
  },
  {
    "id": "pg-1844",
    "title": "게임 맵 최단거리",
    "group": "tree",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/1844",
    "status": "미완성",
    "problem": "네 방향 이동으로 목표까지 최소 칸 수를 구한다. 도달 불가면 -1이다.",
    "date": "2026-09-18",
    "summary": "분기마다 모든 경우를 만들려던 생각에서, 가까운 칸부터 확인하는 BFS가 최단거리를 보장하는 이유를 연결했다.",
    "question": "처음에는 갈 수 있는 분기를 저장하고 모든 경우를 탐색한 뒤 가장 작은 값을 고르려고 했다. 상하좌우 배열까지 만들었지만 현재 좌표 갱신, 범위 검사, 방문 처리가 빠져 있었다.",
    "attempt": "목표 좌표를 maps.size()-1과 maps[0].size()-1로 잡은 것은 맞았다. 반면 while(X == x && Y == y)는 시작 시 목표가 아니므로 바로 종료되고, maps[x + SearchX][y + SearchY]에는 방향 인덱스 i도 필요하다.",
    "turning": "이 기록에서는 풀이를 완성하지 않았다. 다음 단계는 좌표와 거리를 queue에 넣고, 시작점부터 같은 거리의 칸을 차례로 방문하는 것이다. 방문한 칸은 다시 넣지 않아야 분기가 합쳐져도 중복 탐색하지 않는다.",
    "learned": [
      "배열 경계 안인지 확인한 뒤 maps에 접근해야 한다.",
      "최단거리 문제에서 BFS는 거리 1, 거리 2 순서로 칸을 처리한다.",
      "미완성 코드의 문법 문제와 알고리즘 선택 문제를 따로 고친다."
    ],
    "code_title": "당시 도달한 탐색 골격",
    "solution_code": "int dx[4] {0, 1, 0, -1};\nint dy[4] {1, 0, -1, 0};\n\n// 다음 단계\n// 1. queue에 {0, 0}을 넣는다.\n// 2. 네 방향의 nx, ny가 범위 안이고 아직 방문하지 않았는지 확인한다.\n// 3. maps[nx][ny]에 현재 거리 + 1을 기록한다.\n// 4. 목표 칸의 값 또는 -1을 반환한다."
  },
  {
    "id": "pg-132267",
    "title": "콜라 문제",
    "group": "simulation",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/132267",
    "status": "채점 미확인",
    "problem": "빈 병을 교환하며 받은 병의 총수를 구한다.",
    "date": "2026-09-11",
    "summary": "한 번의 교환에서 받은 병, 남은 병, 누적 결과를 분리해 반복 상태를 정리했다.",
    "question": "초기 코드에서는 my를 어떤 값으로 시작할지, 받은 콜라를 다음 교환에서 어떻게 빈 병으로 다시 사용할지가 섞여 있었다.",
    "attempt": "my를 현재 가진 빈 병 n으로 시작했다. 한 번 교환할 때 cola=(my/a)*b를 계산하고, answer에는 cola를 더했다.",
    "turning": "다음 반복의 빈 병은 교환하고 남은 my%a와 새로 받아 마신 cola의 합이다. 이전 코드에서는 cola를 my에 두 번 더했지만 my=my%a+cola 한 줄이면 충분하다. my가 a와 같은 경우도 교환할 수 있으므로 조건은 my>=a다.",
    "learned": [
      "반복 시뮬레이션에서는 현재 상태와 이번 변화량을 다른 변수로 둔다.",
      "몫은 교환 횟수, 나머지는 교환 후 남은 병을 뜻한다.",
      "경계값 my==a를 손으로 확인하면 >와 >=를 구분할 수 있다."
    ],
    "code_title": "상태를 정리한 풀이",
    "solution_code": "int solution(int a, int b, int n) {\n    int answer = 0;\n    int bottles = n;\n\n    while (bottles >= a) {\n        int received = (bottles / a) * b;\n        bottles = bottles % a + received;\n        answer += received;\n    }\n    return answer;\n}"
  },
  {
    "id": "pg-42626",
    "title": "더 맵게",
    "group": "queue",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/42626",
    "status": "수정 중",
    "problem": "가장 작은 두 값을 섞어 모든 값이 K 이상이 되는 최소 횟수를 구한다.",
    "date": "2026-09-11",
    "summary": "최솟값 두 개를 반복해서 꺼내기 위해 최소 힙을 사용하고 종료 조건을 다듬었다.",
    "question": "priority_queue는 기본적으로 큰 값이 먼저 나오는데 이 문제는 가장 작은 두 값이 필요했다. greater<int>를 지정한 우선순위 큐가 왜 최소 힙이 되는지부터 확인했다.",
    "attempt": "모든 스코빌 값을 최소 힙에 넣고 top 두 개를 꺼내 첫 번째+두 번째*2를 다시 넣었다. 섞은 횟수는 answer에 누적했다.",
    "turning": "반복 조건은 가장 작은 값이 K보다 작을 때다. <=를 사용하면 K와 정확히 같은 값도 불필요하게 섞는다. 두 번째 값을 꺼내기 전에 원소가 두 개 미만인지 검사해야 더 만들 수 없는 경우 -1을 반환할 수 있다.",
    "learned": [
      "greater<int> 비교자를 사용하면 가장 작은 값이 top에 온다.",
      "전체가 조건을 만족하는지는 최소값 하나만 확인하면 된다.",
      "top을 호출하기 전 컨테이너가 비어 있지 않은지 보장해야 한다."
    ],
    "code_title": "종료 조건을 고친 풀이",
    "solution_code": "int solution(vector<int> scoville, int K) {\n    priority_queue<int, vector<int>, greater<int>> heap(scoville.begin(), scoville.end());\n    int count = 0;\n\n    while (!heap.empty() && heap.top() < K) {\n        if (heap.size() < 2) return -1;\n        int first = heap.top(); heap.pop();\n        int second = heap.top(); heap.pop();\n        heap.push(first + second * 2);\n        count++;\n    }\n    return count;\n}"
  },
  {
    "id": "pg-42586",
    "title": "기능개발",
    "group": "queue",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/42586",
    "status": "수정 중",
    "problem": "작업 순서대로 완료된 기능을 묶어 배포한다.",
    "date": "2026-09-10",
    "summary": "작업 진행과 배포 묶음을 같은 반복문에서 처리하면서 생기는 0개 배포 문제를 확인했다.",
    "question": "앞 작업이 끝나야 뒤 작업도 배포할 수 있으므로, 현재 num부터 연속으로 100 이상인 작업 수를 세려 했다.",
    "attempt": "완료된 수 count를 세어 결과에 넣고 num을 옮긴 뒤, 현재 작업이 끝날 때까지 남은 작업의 진행도를 하루씩 증가시켰다.",
    "turning": "현재 작업이 아직 100 미만인 상태에서 count를 먼저 넣으면 결과에 0이 생긴다. 먼저 현재 배포 기준 작업이 완료될 때까지 날짜를 진행하고, 그 다음 연속 완료된 기능을 세어 결과에 넣어야 한다. 이 기록에서는 그 순서 변경 전까지 작성했다.",
    "learned": [
      "문제의 시간 흐름과 결과를 기록하는 시점을 분리한다.",
      "배포 묶음에는 항상 하나 이상의 기능이 있어야 한다.",
      "진행도를 매일 갱신하는 방식은 이해하기 쉽지만 완료일을 계산하는 방식도 비교할 수 있다."
    ],
    "code_title": "수정해야 할 반복 순서",
    "solution_code": "// 1. progresses[num]이 100이 될 때까지 남은 작업을 진행한다.\n// 2. num부터 연속으로 완료된 작업의 수 count를 센다.\n// 3. count를 결과에 넣고 num += count 한다.\n//\n// 기존 코드에서는 1번보다 2번을 먼저 실행해\n// 완료된 작업이 없을 때도 0을 push할 수 있었다."
  },
  {
    "id": "pg-12921",
    "title": "소수 찾기",
    "group": "math",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12921",
    "status": "오답 · 시간 초과",
    "problem": "2부터 n까지 소수의 개수를 센다.",
    "date": "2026-09-10",
    "summary": "약수를 직접 검사하는 풀이의 정확도와 시간 초과를 따로 분석했다.",
    "question": "각 숫자를 2부터 절반까지 나누며 소수인지 확인했다. break와 홀수만 검사하는 방법으로 반복을 줄였지만 큰 n에서는 여전히 시간 초과가 났다.",
    "attempt": "짝수는 합성수로 먼저 표시하고 3부터 홀수 약수만 검사했다. 이 과정에서 2도 짝수라는 이유로 제외되는 예외가 생겼고 별도 보정을 넣었다.",
    "turning": "정확성 문제는 2를 예외 처리하면 고칠 수 있지만, 모든 i마다 약수를 검사하는 구조는 효율성 한계가 남는다. 에라토스테네스의 체는 소수의 배수를 한 번에 지워 같은 나눗셈을 반복하지 않는다. 당시 제출은 일부 정확성 통과와 효율성 0점이므로 완료로 기록하지 않았다.",
    "learned": [
      "최적화 전에 작은 경계값 2, 3, 4를 확인해야 한다.",
      "break는 한 숫자의 검사를 줄이지만 전체 복잡도를 충분히 낮추지 못할 수 있다.",
      "정확성 실패와 시간 초과는 원인과 해결 방법이 다르다."
    ],
    "code_title": "다음 학습으로 정리한 체",
    "solution_code": "int solution(int n) {\n    vector<bool> isPrime(n + 1, true);\n    isPrime[0] = isPrime[1] = false;\n\n    for (int i = 2; i * i <= n; i++) {\n        if (!isPrime[i]) continue;\n        for (int multiple = i * i; multiple <= n; multiple += i) {\n            isPrime[multiple] = false;\n        }\n    }\n\n    return count(isPrime.begin(), isPrime.end(), true);\n}"
  },
  {
    "id": "lc-1510",
    "title": "Stone Game IV · 승패 DP",
    "group": "dp",
    "url": "https://leetcode.com/problems/stone-game-iv/",
    "status": "미완성",
    "problem": "제곱수만큼 돌을 제거하는 게임의 선공 승패를 구한다.",
    "date": "2026-09-10",
    "summary": "현재 상태에서 상대를 패배 상태로 보낼 수 있는지를 기준으로 승패 DP를 이해했다.",
    "question": "bool 배열에 true와 false만 넣으면 계산 전 상태와 패배 상태를 어떻게 구분하는지, dp[1]과 dp[4]가 왜 모두 true인지가 혼란스러웠다.",
    "attempt": "dp를 0부터 n까지 순서대로 채우면 현재 i보다 작은 상태는 이미 계산되어 있다. i에서 j²개를 가져간 뒤 남는 상태는 i-j*j이며, 그 상태가 상대의 패배라면 현재 상태는 승리다.",
    "turning": "초기 코드의 dp[i+j*j]는 미래 상태를 보므로 아직 계산되지 않았다. i-j*j로 바꾸고 false인 이전 상태 하나를 찾으면 dp[i]=true로 두고 반복을 끝낸다. 마지막에는 dp[n]을 반환해야 한다.",
    "learned": [
      "dp[i]는 돌 i개에서 현재 차례인 사람이 이길 수 있는지를 뜻한다.",
      "선택 후 상대에게 패배 상태를 넘길 수 있으면 현재는 승리 상태다.",
      "작은 인덱스부터 채우면 필요한 이전 결과가 이미 계산되어 있다."
    ],
    "code_title": "전이식을 반영한 풀이",
    "solution_code": "class Solution {\npublic:\n    bool winnerSquareGame(int n) {\n        vector<bool> dp(n + 1, false);\n\n        for (int stones = 1; stones <= n; stones++) {\n            for (int take = 1; take * take <= stones; take++) {\n                if (!dp[stones - take * take]) {\n                    dp[stones] = true;\n                    break;\n                }\n            }\n        }\n        return dp[n];\n    }\n};"
  },
  {
    "id": "pg-68644",
    "title": "두 개 뽑아서 더하기",
    "group": "math",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/68644",
    "status": "수정 중",
    "problem": "서로 다른 인덱스의 두 수 합을 중복 없이 오름차순으로 반환한다.",
    "date": "2026-09-08",
    "summary": "중복 합은 set으로 제거했지만 같은 원소를 두 번 선택하지 않도록 반복 시작점을 조정했다.",
    "question": "모든 두 수의 합을 만들고 정렬과 중복 제거를 한 번에 처리하기 위해 set을 선택했다.",
    "attempt": "처음에는 항상 numbers[0]을 더했고, 다음에는 numbers[i]+numbers[b]로 바꿨다. b를 0부터 시작하면 같은 쌍을 반대 순서로 다시 계산한다.",
    "turning": "b를 i+1부터 시작하면 i와 b가 서로 다른 인덱스가 되고 각 조합을 한 번만 방문한다. b=i로 시작하면 같은 인덱스의 수를 두 번 뽑는 셈이므로 문제 조건과 다르다.",
    "learned": [
      "값의 중복과 인덱스의 중복은 다른 문제다.",
      "두 원소 조합은 두 번째 반복을 i+1에서 시작한다.",
      "set은 삽입하면서 중복 제거와 정렬을 함께 수행한다."
    ],
    "code_title": "인덱스 범위를 고친 풀이",
    "solution_code": "vector<int> solution(vector<int> numbers) {\n    set<int> sums;\n\n    for (int i = 0; i < numbers.size(); i++) {\n        for (int j = i + 1; j < numbers.size(); j++) {\n            sums.insert(numbers[i] + numbers[j]);\n        }\n    }\n\n    return vector<int>(sums.begin(), sums.end());\n}"
  },
  {
    "id": "lc-88",
    "title": "정렬된 배열 병합",
    "group": "array",
    "url": "https://leetcode.com/problems/merge-sorted-array/",
    "status": "수정 중",
    "problem": "두 정렬 배열을 nums1에 오름차순으로 합친다.",
    "date": "2026-09-08",
    "summary": "두 정렬 배열을 뒤에서부터 채우며 아직 읽지 않은 nums1 값을 덮어쓰지 않는 방법을 익혔다.",
    "question": "처음에는 nums2를 nums1 뒤에 붙이고 sort하려 했다. 한 번의 순회로 끝내려면 이미 확보된 nums1의 뒤 공간을 어떻게 사용할지가 핵심이었다.",
    "attempt": "m과 n을 각각 마지막 유효 인덱스로 줄이고, nums1의 맨 뒤부터 두 배열의 큰 값을 넣으려 했다. 한쪽 인덱스가 -1이 된 뒤에도 접근하면서 런타임 오류가 생겼다.",
    "turning": "nums2에 남은 값이 있을 동안만 반복하면 된다. nums1이 소진됐거나 nums2의 값이 더 크면 nums2에서 가져오고, 아니면 nums1 값을 뒤로 옮긴다. nums2가 먼저 소진되면 nums1의 남은 값은 이미 제자리에 있다.",
    "learned": [
      "m과 n은 개수이고 마지막 인덱스는 각각 m-1, n-1이다.",
      "뒤에서 채우면 nums1의 아직 읽지 않은 값을 덮지 않는다.",
      "각 포인터는 한 번씩만 줄어들므로 전체 반복은 O(m+n)이다."
    ],
    "code_title": "뒤에서 병합하는 풀이",
    "solution_code": "class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        int first = m - 1;\n        int second = n - 1;\n        int write = m + n - 1;\n\n        while (second >= 0) {\n            if (first >= 0 && nums1[first] > nums2[second]) {\n                nums1[write--] = nums1[first--];\n            } else {\n                nums1[write--] = nums2[second--];\n            }\n        }\n    }\n};"
  },
  {
    "id": "lc-1347",
    "title": "두 문자열의 아나그램 만들기",
    "group": "string",
    "url": "https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/",
    "status": "결과 공유 · 수정 중",
    "problem": "t의 문자를 교체해 s와 같은 문자 빈도를 만드는 최소 횟수를 구한다.",
    "date": "2026-09-07",
    "summary": "문자별 개수 차이를 map에 누적하고 필요한 교체 수가 어느 방향의 차이인지 구분했다.",
    "question": "s의 문자는 +1, t의 문자는 -1로 기록하면 같은 문자는 0이 된다. 이후 pair의 값에 어떻게 접근하고 어떤 부호를 더해야 하는지를 확인했다.",
    "attempt": "unordered_map<char,int>를 순회하며 음수에는 !A.second 또는 -A.second를 적용하고 양수도 더하려 했다. 논리 부정 !는 절댓값이 아니라 0 또는 1을 만든다.",
    "turning": "t를 바꿔 s로 만드는 횟수는 s에 부족한 문자 수, 즉 양수인 차이만 더하면 된다. 양수와 음수의 절댓값을 모두 더하면 같은 차이를 두 번 세게 된다. 당시 Runtime 수치는 한 제출 결과일 뿐 후속 코드의 정답 여부와 섞지 않았다.",
    "learned": [
      "range-for에서 map 원소는 key와 value를 가진 pair다.",
      "!value는 부호 전환이 아니라 논리값 변환이다.",
      "빈도 차이의 어느 방향을 합산할지 문제의 변환 방향으로 결정한다."
    ],
    "code_title": "빈도 차이로 정리한 풀이",
    "solution_code": "class Solution {\npublic:\n    int minSteps(string s, string t) {\n        unordered_map<char, int> count;\n\n        for (int i = 0; i < s.size(); i++) {\n            count[s[i]]++;\n            count[t[i]]--;\n        }\n\n        int steps = 0;\n        for (const auto& entry : count) {\n            if (entry.second > 0) steps += entry.second;\n        }\n        return steps;\n    }\n};"
  },
  {
    "id": "pg-181932",
    "title": "코드 처리하기",
    "group": "string",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/181932",
    "status": "채점 미확인",
    "problem": "문자 1에서 mode를 바꾸고 해당 인덱스의 문자를 모은다.",
    "date": "2026-09-04",
    "summary": "문자 1을 만날 때 mode를 전환하고 인덱스의 홀짝에 따라 문자를 선택했다.",
    "question": "문자열을 한 번 순회하면서 mode 0에서는 짝수 인덱스, mode 1에서는 홀수 인덱스의 문자를 모아야 했다.",
    "attempt": "bool mode를 false로 시작하고 code[i]가 문자 1이 아닐 때 현재 mode와 i%2를 비교했다. 문자 1이면 mode=!mode로 전환했다.",
    "turning": "숫자 1이 아니라 문자 비교인 code[i] != '1'을 사용했다. 마지막에 answer가 비어 있으면 EMPTY를 반환하는 조건을 추가하면서 요구사항을 완성했다.",
    "learned": [
      "bool 값은 ! 연산으로 간단히 전환할 수 있다.",
      "문자 리터럴은 작은따옴표를 사용한다.",
      "주 반복이 끝난 뒤 빈 결과 같은 출력 예외를 처리한다."
    ],
    "code_title": "상태 전환 풀이",
    "solution_code": "string solution(string code) {\n    bool mode = false;\n    string result;\n\n    for (int i = 0; i < code.size(); i++) {\n        if (code[i] == '1') {\n            mode = !mode;\n        } else if ((!mode && i % 2 == 0) || (mode && i % 2 == 1)) {\n            result += code[i];\n        }\n    }\n\n    return result.empty() ? \"EMPTY\" : result;\n}"
  },
  {
    "id": "lc-1603",
    "title": "주차 시스템 설계",
    "group": "simulation",
    "url": "https://leetcode.com/problems/design-parking-system/",
    "status": "결과 공유",
    "problem": "차량 종류별 남은 공간과 주차 가능 여부를 관리한다.",
    "date": "2026-09-04",
    "summary": "차량 종류를 배열 인덱스로 바꾸어 남은 주차 공간을 객체 상태로 관리했다.",
    "question": "생성자에서 받은 big, medium, small을 addCar가 계속 사용할 수 있게 어디에 저장해야 하는지 확인했다.",
    "attempt": "클래스 멤버 A[3]을 만들고 carType-1로 접근했다. 함수 안 지역 변수는 종료되면 사라지지만 멤버 변수는 객체가 살아 있는 동안 유지된다는 점을 연결했다.",
    "turning": "원시 배열은 생성자 본문에서 A={...} 형태로 다시 대입할 수 없다. 멤버를 vector로 만들고 초기화 목록에서 값을 넣으면 의도가 분명해진다. 공간이 있으면 하나 줄이고 true, 없으면 false를 반환한다.",
    "learned": [
      "객체가 계속 기억해야 하는 값은 멤버 변수에 둔다.",
      "문제의 carType 1~3은 배열 인덱스 0~2로 바꾼다.",
      "생성자 초기화 목록으로 멤버의 초기 상태를 만든다."
    ],
    "code_title": "멤버 상태로 정리한 풀이",
    "solution_code": "class ParkingSystem {\n    vector<int> spaces;\n\npublic:\n    ParkingSystem(int big, int medium, int small)\n        : spaces{big, medium, small} {}\n\n    bool addCar(int carType) {\n        int index = carType - 1;\n        if (spaces[index] == 0) return false;\n        spaces[index]--;\n        return true;\n    }\n};"
  },
  {
    "id": "lc-121",
    "title": "주식 한 번 거래의 최대 이익",
    "group": "greedy",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "status": "결과 공유",
    "problem": "한 번 사고 이후 팔아 얻는 최대 이익을 구한다.",
    "date": "2026-09-03",
    "summary": "오른쪽에서 순회하며 미래의 최고 가격을 유지해 한 번의 거래에서 얻는 최대 이익을 구했다.",
    "question": "처음에는 prices.size()부터 접근하고 가능한 차익을 total에 계속 더했다. 그러나 이 문제는 여러 번의 이익 합이 아니라 한 번의 매수와 매도의 최대 차이를 묻는다.",
    "attempt": "마지막 날부터 거꾸로 보며 지금까지 본 가장 높은 가격 topprices를 저장했다. 현재 가격에 그 최고 가격을 빼고 profit의 최댓값을 갱신했다.",
    "turning": "첫 인덱스는 size()-1이어야 배열 안에 있다. 최고 가격과 최대 이익을 각각 max로 갱신하면 별도 최소 가격 변수 없이 O(1) 공간으로 끝낼 수 있다. 여러 번 제출할 때 Runtime 값이 바뀐 경험으로 측정값과 복잡도도 구분했다.",
    "learned": [
      "미래 값이 필요한 문제는 뒤에서 순회하는 방법을 고려한다.",
      "한 번 거래이므로 차익을 누적하지 않고 최댓값만 저장한다.",
      "실행 시간 표시의 작은 차이보다 O(n), O(1) 구조가 더 안정적인 판단 기준이다."
    ],
    "code_title": "역방향 한 번 순회 풀이",
    "solution_code": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int highestFuturePrice = 0;\n        int bestProfit = 0;\n\n        for (int i = prices.size() - 1; i >= 0; i--) {\n            highestFuturePrice = max(highestFuturePrice, prices[i]);\n            bestProfit = max(bestProfit, highestFuturePrice - prices[i]);\n        }\n        return bestProfit;\n    }\n};"
  },
  {
    "id": "pg-12953",
    "title": "N개의 최소공배수",
    "group": "math",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12953",
    "status": "채점 미확인",
    "problem": "모든 수의 공통 배수 중 가장 작은 값을 구한다.",
    "date": "2026-09-02",
    "summary": "모든 수의 배수를 직접 증가시키는 접근으로 최소공배수를 찾으려 했고 반복 비용을 확인했다.",
    "question": "각 원소를 자기 자신의 배수로 늘리면 결국 같은 값에서 만난다는 생각으로 현재 최댓값까지 작은 값을 증가시키려 했다.",
    "attempt": "원본 값을 temp에 보존하고 arr의 각 값을 top 이상이 될 때까지 temp[i]만큼 더했다. 모든 값이 같은지 확인하는 함수를 따로 만들었다.",
    "turning": "이 접근은 동작 방향을 이해하기 쉽지만 수가 커질수록 같은 덧셈을 많이 반복한다. 두 수의 최소공배수는 a/gcd(a,b)*b이고, 배열을 앞에서부터 현재 최소공배수와 다음 수로 합치면 반복 덧셈 없이 구할 수 있다. 이 코드는 당시 접근에서 이어지는 개선안이다.",
    "learned": [
      "최대값에서 만난다는 직관은 배수 탐색으로 구현할 수 있다.",
      "반복 횟수가 커지는 지점을 찾으면 수학적 연산으로 바꿀 수 있다.",
      "곱셈 전에 gcd로 나누면 중간 값이 커지는 위험을 줄인다."
    ],
    "code_title": "반복 탐색을 줄인 풀이",
    "solution_code": "int gcd(int a, int b) {\n    while (b != 0) {\n        int rest = a % b;\n        a = b;\n        b = rest;\n    }\n    return a;\n}\n\nint solution(vector<int> arr) {\n    int lcm = arr[0];\n    for (int i = 1; i < arr.size(); i++) {\n        lcm = lcm / gcd(lcm, arr[i]) * arr[i];\n    }\n    return lcm;\n}"
  },
  {
    "id": "pg-42587",
    "title": "프로세스",
    "group": "queue",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/42587",
    "status": "채점 미확인",
    "problem": "우선순위와 대기 순서에 따른 목표의 실행 순서를 구한다.",
    "date": "2026-09-02",
    "summary": "대기 순서를 위한 queue와 최고 우선순위를 위한 priority_queue를 함께 사용했다.",
    "question": "queue는 가운데 인덱스로 접근할 수 없으므로, 현재 프로세스보다 높은 우선순위가 뒤에 있는지 매번 어떻게 확인할지가 문제였다.",
    "attempt": "queue<pair<int,int>>에 우선순위와 원래 위치를 함께 넣고, 별도 priority_queue에는 우선순위만 넣었다. 현재 queue의 front가 최고 우선순위가 아니면 뒤로 보내고, 같으면 실행했다.",
    "turning": "priority_queue는 별도 헤더가 아니라 <queue>에 포함된다. 실행할 때 일반 queue와 우선순위 큐에서 값을 함께 pop해야 두 자료구조의 상태가 맞는다. 원래 위치를 pair.second로 보존해 목표인지 확인했다.",
    "learned": [
      "queue는 순서를, priority_queue는 현재 최댓값 확인을 담당한다.",
      "같은 데이터를 두 자료구조에 둘 때 제거 시점을 함께 맞춘다.",
      "pair에 원래 인덱스를 보존하면 재배치 후에도 대상을 찾을 수 있다."
    ],
    "code_title": "두 큐를 결합한 풀이",
    "solution_code": "int solution(vector<int> priorities, int location) {\n    queue<pair<int, int>> waiting;\n    priority_queue<int> highest;\n\n    for (int i = 0; i < priorities.size(); i++) {\n        waiting.push({priorities[i], i});\n        highest.push(priorities[i]);\n    }\n\n    int order = 0;\n    while (!waiting.empty()) {\n        auto current = waiting.front();\n        waiting.pop();\n\n        if (current.first < highest.top()) {\n            waiting.push(current);\n            continue;\n        }\n\n        highest.pop();\n        order++;\n        if (current.second == location) return order;\n    }\n    return order;\n}"
  },
  {
    "id": "swea-1859",
    "title": "백만 장자 프로젝트",
    "group": "greedy",
    "url": "https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5LrsUaDxcDFAXc",
    "status": "채점 미확인",
    "problem": "하루 구매 제한 아래 여러 날 거래의 최대 이익을 구한다.",
    "date": "2026-09-02",
    "summary": "미래의 최고 판매가를 뒤에서 갱신하며 매일 살지 말지를 한 번의 순회로 결정했다.",
    "question": "앞에서 볼 때는 현재보다 비싼 날이 뒤에 있는지 계속 찾아야 했다. 남은 값 중 가장 비싼 날을 매번 검색하면 반복이 겹친다.",
    "attempt": "가격을 모두 저장한 뒤 마지막 날부터 앞으로 이동했다. 현재 가격이 지금까지 본 최고 가격보다 크면 최고 가격을 갱신하고, 작으면 최고 가격과의 차이를 이익에 더했다.",
    "turning": "뒤에서 순회하면 maxPrice는 현재 날 이후의 최고 판매가라는 의미를 유지한다. 이 문제는 하루마다 하나씩 살 수 있으므로 주식 한 번 거래 문제와 달리 가능한 차익을 모두 누적한다. 합은 int를 넘을 수 있어 long long이 필요하고 total/totoal 오타도 통일해야 한다.",
    "learned": [
      "미래 최댓값을 반복 검색하는 대신 역순으로 한 번 갱신한다.",
      "비슷한 가격 문제라도 거래 횟수 조건에 따라 최대값 저장과 이익 누적이 달라진다.",
      "자료형과 변수 이름도 채점 결과를 바꾸는 구현 조건이다."
    ],
    "code_title": "역순 누적 풀이",
    "solution_code": "long long profit = 0;\nint maxPrice = 0;\n\nfor (int i = prices.size() - 1; i >= 0; i--) {\n    if (prices[i] > maxPrice) {\n        maxPrice = prices[i];\n    } else {\n        profit += maxPrice - prices[i];\n    }\n}"
  },
  {
    "id": "swea-16910",
    "title": "원 안의 점",
    "group": "math",
    "url": "https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AYcllbDqUVgDFASR",
    "status": "채점 미확인",
    "problem": "반지름 N의 원에 포함되는 정수 좌표를 센다.",
    "date": "2026-09-10",
    "summary": "원을 감싸는 정사각형의 모든 정수 좌표를 순회하고 원의 식으로 포함 여부를 판정했다.",
    "question": "x와 y를 -N부터 N까지 움직이면 정사각형을 세는 것처럼 보였다. 실제로 원 안의 점만 남기는 역할은 x*x+y*y<=N*N 조건이 한다.",
    "attempt": "이중 반복문으로 좌표 후보를 만들고 조건을 만족할 때 count를 증가시켰다. 반복 조건을 x<N, y<N으로 두어 +N 경계가 빠졌고 결과에 2를 더해 보정했다.",
    "turning": "+N인 세로선과 가로선에서 원 안에 드는 정수점은 각각 (N,0), (0,N)뿐이다. -N 쪽 두 점은 시작값에 포함되어 있으므로 빠진 점은 네 개가 아니라 두 개였다. 보정보다 반복 범위를 <=N으로 쓰는 편이 의도가 분명하다.",
    "learned": [
      "이중 반복문은 후보 영역을 만들고 if 조건이 실제 도형을 판정한다.",
      "제곱 거리 비교는 sqrt 없이 원 안 여부를 검사한다.",
      "범위 누락을 결과 보정으로 숨기기보다 반복 경계를 바로잡는다."
    ],
    "code_title": "경계를 바로잡은 풀이",
    "solution_code": "int count = 0;\n\nfor (int x = -N; x <= N; x++) {\n    for (int y = -N; y <= N; y++) {\n        if (x * x + y * y <= N * N) {\n            count++;\n        }\n    }\n}"
  },
  {
    "id": "lc-2058",
    "title": "연결 리스트의 임계점 거리",
    "group": "tree",
    "url": "https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/",
    "status": "수정 중",
    "problem": "이웃보다 엄격히 크거나 작은 임계점의 최소·최대 거리를 구한다.",
    "date": "2026-09-01",
    "summary": "연결 리스트에서 이전·현재·다음 값을 비교해 임계점의 위치와 거리 계산을 분리했다.",
    "question": "처음에는 임계점 노드 자체를 first와 last에 저장하고 다시 순회해 거리를 세려 했다. 위치와 거리 변수가 섞이면서 최소 거리의 기준이 불분명해졌다.",
    "attempt": "findpoint에서 지역 최솟값·최댓값을 판정하고 num, num2를 증가시키려 했다. 벡터 초기화 문법과 nullptr 접근을 수정했지만 num2 증가와 첫 임계점 처리, p의 유효성 검사가 남았다.",
    "turning": "한 번의 순회에서 현재 인덱스를 기록하면 노드 포인터를 다시 따라갈 필요가 없다. 첫 임계점 위치는 최대 거리의 기준, 직전 임계점 위치는 최소 거리의 기준으로 사용한다. 이 코드는 당시 두 번 순회 접근을 같은 아이디어로 단순화한 후속 정리다.",
    "learned": [
      "임계점은 이전과 다음 노드가 모두 있는 현재 노드만 될 수 있다.",
      "최소 거리는 연속한 임계점 사이, 최대 거리는 첫 임계점과 마지막 임계점 사이에서 나온다.",
      "노드 자체보다 순회 인덱스를 저장하면 거리 계산이 직접적이다."
    ],
    "code_title": "위치만 저장하는 한 번 순회 풀이",
    "solution_code": "class Solution {\npublic:\n    vector<int> nodesBetweenCriticalPoints(ListNode* head) {\n        int first = -1, previous = -1;\n        int minDistance = INT_MAX, index = 1;\n        ListNode* prev = head;\n        ListNode* current = head->next;\n\n        while (current->next != nullptr) {\n            bool critical =\n                (prev->val < current->val && current->val > current->next->val) ||\n                (prev->val > current->val && current->val < current->next->val);\n\n            if (critical) {\n                if (first == -1) first = index;\n                if (previous != -1) minDistance = min(minDistance, index - previous);\n                previous = index;\n            }\n            prev = current;\n            current = current->next;\n            index++;\n        }\n\n        if (first == previous) return {-1, -1};\n        return {minDistance, previous - first};\n    }\n};"
  }
];
